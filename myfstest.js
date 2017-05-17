/**
 * Created by myeongsic on 2017. 5. 17..
 */

const fs = require('fs');

//폴더 생성
/*
 fs.mkdir('./tmp2', err =>{
 if(err) throw  err

 })*/

//폴더 삭제

/*
 fs.rmdir('./tmp', err =>{
 if(err) throw  err

 })*/

//파일 생성

/*
 fs.open('./myfile','wx',(err, fd) =>{

 if(err) throw  err

 })*/

//파일 삭제

/*fs.unlink('./myfile', err => {
 if (err) throw err;
 })*/

//이름 고치기

/*fs.rename('tmp2','tmp', err =>{
 if(err) throw  err

 })*/

//폴더 변경 리스너

/*fs.watch('./tmp',(eventType, filename) =>{
    if(filename)
        console.log(filename)

})*/

/*fs.watchFile('./tmp/newfile',function (curr, prev) {

    console.log('현재 수정된 시간 '+curr.mtime)
    console.log('이전 수정된 시간'+prev.mtime)

})*/


//읽기

/*fs.readFile('./tmp/newfile','utf8',(err, data) =>{

    if(err) throw err
    console.log(data)
})*/

//쓰기
fs.writeFile('./tmp/newfile2','하울의 코딩채널', err =>{

    if(err) throw  err
    console.log("생성 성공")

})


