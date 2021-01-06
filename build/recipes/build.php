<?php

namespace Deployer;

task('build', [
    'build:config',
    'build:npm',
])->desc('Initialize an environment');

/**
 * Собирает файлы конфигурации по шаблонам из папок окружения, подставляя переменные окружения
 * вместо плейсхолдеров. Шаблоны могут лежать, как в папке текущего окружения, так и в папке common,
 * общей для всех окружений. Приоритет имеют шаблоны текущего окружения.
 */
task('build:config', function() {
    $files = array_merge(
        findFiles('{{env_dir}}/common'),
        findFiles('{{env_dir}}/{{target}}')
    );
    foreach ($files as $filename => $sourcePath) {
        buildConfig($sourcePath, "{{base_dir}}/$filename");
    }
})->desc('Prepare configure files');

/**
 * Устанавливает зависимости и собирает проект
 */
task('build:npm', function() {
    runLocally('npm run build');
})->desc('Build npm project');
