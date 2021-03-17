//console.js

let selection = document.getElementById('audio-selection');

let cLog = document.getElementById('log');
let cError = document.getElementById('error');
let cTable = document.getElementById('table');
let cDir = document.getElementById('dir');
let cDirxml = document.getElementById('dirxml');
let cGroup = document.getElementById('group');
let cTime = document.getElementById('time');
let cTimeEnd = document.getElementById('timeEnd');
let cTrace = document.getElementById('trace');

cLog.addEventListener('click', consoleLog);
cError.addEventListener('click', consoleError);
cTable.addEventListener('click', consoleTable);
cDir.addEventListener('click', consoleDir);
cDirxml.addEventListener('click', consoleDirxml);
cGroup.addEventListener('click', consoleGroup);
cTime.addEventListener('click', consoleTime);
cTimeEnd.addEventListener('click', consoleTimeEnd);
cTrace.addEventListener('click', consoleTrace);

function consoleLog() {
    console.log(vol);
}

function consoleError() {
    console.error("You just clicked the error button");
}

function consoleTable() {
    console.table([
        {
            volume: vol,
            sound: currHorn,
        }
    ]);
}

function consoleDir() {
    console.dir(selection);
}

function consoleDirxml() {
    console.dirxml(document.body);
}

function consoleGroup() {
    const label = 'Horn Options';
    console.group(label);
    console.info('Air Horn');
    console.info('Car Horn');
    console.info('Party Horn');
    console.groupEnd(label);
}

function consoleTime() {
    console.time(['Timer']);
    for (var i = 0; i < 100000; i++) {
        let square = i ** 2;
    }
}

function consoleTimeEnd() {
    console.timeEnd(['Timer']);
}

function consoleTrace() {
    const first = () => { second(); };
    const second = () => { third(); };
    const third = () => { fourth(); };
    const fourth = () => { console.trace(); };
    first();
}

class CustomError extends Error {
    constructer(message) {
        this.name = "CustomError";
    }
}

try {
    vNum.value = 1000;
    throw new CustomError("Custom Error!");
} catch (err) {
    alert('Number input not there');
} finally {
    alert('Remove comment syntax');
}