
I - De chay server

I.1 - cai dat :
npm install connect --save-dev

npm install serve-static --save-dev


I.2 - Sau do go lenh
node server.js

Sau moi khi chuyen sang chuong khac, trong file server.js can chuyen ten chuong Chapter01 sang chuong moi, xoa dau cach

url example
http://localhost:5000/controller2.html

II - De chay test

II.1 - cai dat :

npm install -g karma


III - Cai dat deployd site web https://github.com/deployd/deployd

npm install deployd -g

check bang lenh dpd -V
Sau do cai mongodb community
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
md data\db
roi add C:\Program Files\MongoDB\Server\3.2\bin vao $path


IV - Chuong 6

IV.1 - vao thu muc angularjs/deployd go lenh
dpd create sportsstore

IV.2 - de chay new server
cd sportsstore
dpd –d


Neu muon chay voi port thi dung lenh sau
dpd –p 5500 sportsstore\app.dpd
dashboard


IV.3 - url
http://localhost:2403/dashboard/products/data/
http://localhost:2403/products






