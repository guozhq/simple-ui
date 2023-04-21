rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git branch -M master &&
git remote add origin git@gitee.com:guozhq/simple-ui.git &&
git push -f -u origin "master" &&
cd -