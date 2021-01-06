<?php

namespace Deployer;

use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

/**
 * @param $msg
 */
function info($msg)
{
    writeln("<info>{$msg}</info>");
}

/**
 * Собирает файл конфигурации по шаблону, подставляя переменные окружения вместо плейсхолдеров.
 *
 * @param string $sourcePath
 * @param string $targetPath
 * @return bool
 */
function buildConfig($sourcePath, $targetPath)
{
    $sourcePath = parse($sourcePath);
    $targetPath = parse($targetPath);
    if (isVerbose()) {
        writeln('Building config');
        writeln(" source: $sourcePath");
        writeln(" target: $targetPath");
    }
    $template = file_get_contents($sourcePath);
    return createDirectory(\dirname($targetPath)) && file_put_contents($targetPath, parse($template));
}

/**
 * Возвращает файлы, найденые в указанной директории и её поддиректориях.
 *
 * @param string $dir
 * @param array $except
 * @return array
 * @throws \Exception
 */
function findFiles($dir, $except = [])
{
    $dir = rtrim(parse($dir), DIRECTORY_SEPARATOR);
    $iter = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::SELF_FIRST,
        RecursiveIteratorIterator::CATCH_GET_CHILD // Игнорируем папки, на которые нет прав
    );

    $paths = [];
    foreach ($iter as $path => $item) {
        /** @var \SplFileInfo $item */
        if (!$item->isDir() || in_array($item->getFilename(), $except, true)) {
            $relativePath = str_replace($dir . DIRECTORY_SEPARATOR, '', $path);
            $paths[$relativePath] = $item->getRealPath();
        }
    }

    return $paths;
}

/**
 * Возвращает список директорий в указанной директории.
 *
 * @param string $path
 * @param string|string[] $except
 * @return string[]
 */
function dirList($path, $except = [])
{
    $dirs = [];
    $except = (array) $except;
    $path = parse($path);
    $dir = opendir($path);
    while ($file = readdir($dir)) {
        if ($file !== '.' && $file !== '..' && !in_array($file, $except, true) && is_dir("$path/$file")) {
            $dirs[] = $file;
        }
    }
    return $dirs;
}

/**
 * Создаёт директорию.
 *
 * @param string $path
 * @param int $mode
 * @param bool $recursive
 * @return bool
 */
function createDirectory($path, $mode = 0775, $recursive = true)
{
    $path = parse($path);
    if (is_dir($path)) {
        return true;
    }
    $parentDir = dirname($path);
    if ($recursive && $parentDir !== $path && !is_dir($parentDir)) {
        createDirectory($parentDir, $mode);
    }
    try {
        if (!mkdir($path, $mode) || !is_dir($path)) {
            return false;
        }
    } catch (\Exception $e) {
        if (!is_dir($path)) {
            return false;
        }
    }
    try {
        chmod($path, $mode);
    } catch (\Exception $e) {
    }
    return true;
}

function locateBinaryPathLocally($name)
{
    $nameEscaped = escapeshellarg($name);

    $path = runLocally("command -v $nameEscaped || which $nameEscaped || type -p $nameEscaped");
    if ($path) {
        // Deal with issue when `type -p` outputs something like `type -ap` in some implementations
        return trim(str_replace("$name is", '', $path));
    }

    throw new \RuntimeException("Can't locate [$nameEscaped] - neither of [command|which|type] commands are available");
}

/**
 * Создаёт символическую ссылку.
 *
 * @param string $target
 * @param string $link
 * @return bool
 */
function symlink($target, $link)
{
    return \symlink(parse($target), parse($link));
}
