<?php

namespace Deployer;

set('base_dir', \dirname(__DIR__, 2));

set('deployer_dir', get('base_dir') . '/build');

inventory(get('deployer_dir') . '/configs/hosts.yml');

set('env_dir', get('deployer_dir') . '/environments');

set('os_name', function () {
    return (string) run("awk -F= '$1==\"ID\" { print $2 ;}' /etc/os-release | tr -d '\"'");
});

after('deploy:failed', 'deploy:unlock');
