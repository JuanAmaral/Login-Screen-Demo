#!/bin/bash
cd /home/pos-online/
#echo "Digite o kol que deverá ser atualizado: "
#read kolname
#echo $kolname
#token=`jq '.token' rota$kolname.json`
#servidor=`jq '.rota' rota$kolname.json`
#remover aspas
#servidor=`echo $servidor | sed -e 's/\"//g'`
#token=`echo $token | sed -e 's/\"//g'`
#cd keno-lite
#rm -rf .env
echo "Digite a branch da nova build:"
read branch
git checkout $branch
git pull
yarn install
#printf "REACT_APP_BASE_URL = https://$servidor\nREACT_APP_BASE_URL_WS = wss://$servidor\nREACT_APP_TOKEN = $token\nREACT_APP_ROUTE = $servidor" >> .env
yarn build
rm -rf ../pos_online
mv ./build ../pos_online
exit 0
