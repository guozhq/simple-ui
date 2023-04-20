rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@gitee.com:guozhq/Simple-UI.git &&
git push -u origin "master" &&
