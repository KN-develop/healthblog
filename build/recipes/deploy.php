<?php

namespace Deployer;

use Symfony\Component\Console\Input\ArgvInput;

set('release_name', function () {
    return date('Y-m-d-His');
});

/**
 * Main task
 */
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:vendors',
    'deploy:shared',
    'deploy:build',
    'deploy:clear_paths',
    'deploy:writable',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
])->desc('Deploy your project');

after('deploy', 'success');

task('deploy:build', function() {
    // Копируем конфиги с локального сервера на целевой сервер для инициализации приложения
    upload('{{deployer_dir}}/configs/', '{{release_path}}/build/configs/');

    within('{{release_path}}', function () {
        $input = (string) new ArgvInput();
        run('./dep.sh build' . substr($input, strpos($input, ' ')));
    });
});
