const fs=require("fs");
const path = require('path');
const StartPath = path.resolve('./images');//需要拷贝的文件
const EndPath=`./platforms/android/app/src/main/res/drawable-hdpi`;
/**原生自带的图片**/
const paichu=['ic_action_refresh.png','ic_action_scan.png'];

let count=0,newlist=[];
startbtn()
async function startbtn(){
    try {
        /**删除多余的文件**/
        await _readdir(EndPath)
        const files = await _readdir(EndPath)
        const newarry=files.filter(item=>paichu.indexOf(item)==-1)
        for(let item of newarry){
            await _unlink(`${EndPath}/${item}`);
        }
        console.log("----------",StartPath)
        /**拷贝文件**/
        await _readdir(StartPath);
        fileDisplay(StartPath,(item)=>{
            count++;
            if(newlist.length === count){
                console.log('操作成功');
            }
        })
    }catch(err){
        console.error('err:',err);
    }
}

//文件遍历方法
async function fileDisplay(filePath,callback){
    try {
        let files=await _readdir(filePath);
        newlist=[...newlist,...files];
        for(let item of files){
            const newsite=`${filePath}/${item}`;
            let stats=await _stat(newsite);
            if(stats.isFile()){//是一个文件
                const url2=path.resolve(`${EndPath}/${item}`);
                await _copyFile(newsite,url2);
                if(callback){
                    callback({fileurl:url2,filename:item});
                }
            }else if(stats.isDirectory()){//是一个文件夹
                fileDisplay(newsite);
            }
        }
    }catch(err){
        console.error('err:',err);
    }
}

/**读取文件的状态**/
function _stat(fileurl=null){
    return new Promise((resolve, reject) => {
        if(!fileurl) reject('系统错误');
        fs.stat(fileurl,function(err,stat){
            if(err){
                reject(err);
            }else{
                resolve(stat);
            }
        })
    });
}

/**读取文件目录**/
function _readdir(fileurl=null){
    return new Promise((resolve, reject) => {
        if(!fileurl) reject('系统错误');
        fs.readdir(fileurl,function(err,files){
            if(err){
                reject(err);
            }else{
                resolve(files);
            }
        })
    });
}

/**拷贝文件**/
function _copyFile(fileurl,newfileurl){
    return new Promise((resolve, reject) => {
        fs.copyFile(fileurl,newfileurl,function(err){
            if(err){
                reject(err);
            }else{
                resolve();
            }
        })
    });
}

/**删除文件**/
function _unlink(fileurl){
    return new Promise((resolve, reject) => {
        fs.unlink(fileurl,function(err){
            if(err){
                reject(err);
            }else{
                resolve();
            }
        })
    });
}
