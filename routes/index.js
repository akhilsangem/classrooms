var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var buildingFromRooms = [];
var bothData = [];
var brData = [];
var bHold = "requested from room";
var singleRoomData = [];
//sql details
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alpine",
  database: "iastateRooms"
});
//sql connect
con.connect(function(err) {
  if (err) throw err;
  console.log("SQL Connected!");
});
//sql grab table
con.query("SELECT * FROM Buildings", function (err, result, fields) {
   if (err) throw err  ;
   //console.log(result);
   buildingFromRooms = result;
   console.log(buildingFromRooms);
});

/*con.query("SELECT BuildingName FROM Buildings", function (err, result, fields) {
   if (err) throw err;
   //console.log(result);
   brData = result;
   console.log(brData);
});*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Room List', myData: buildingFromRooms});
});

/*router.post('/', function(req, res, next){
   // req.body object has your form values
   console.log("got BuildingName: ");
   console.log(req.body.clubname);
   res.render('index', { title: 'Room List', myData: buildingFromRooms});
});*/

/*router.post('/', function(req, res, next){
   // req.body object has your form values
   var bname = String(req.body.clubname);
   var foundRooms = [];
   con.query("SELECT BuildingName FROM Buildings", function (err, result, fields) {
      if (err) throw err  ;
      //console.log(result);
      bothData = result;
      console.log(bothData);
      res.render('index', { title: 'Room List', myData: bothData});
   });
});*/
router.post('/', function(req, res, next){
   // req.body object has your form values
   var bname = req.body.clubname;
   var roomtoedit = req.body.RoomID;
   var proj = req.body.Projector
   var dvdName = req.body.DVDCombo;
   var switchName = req.body.SwitcherScaler;
   var docCName = req.body.DocCamConnection;
   var micsName = req.body.MicFrequency;
   var ampName = req.body.Amp;
   var lEtherName = req.body.LaptopEthernet;
   var lhdName = req.body.LaptopHDMI;
   var lhsName = req.body.LaptopSound;
   var lvName = req.body.LaptopVGA;
   var oCartName = req.body.OverHeadCart;
   var oHeadName= req.body.OverHead;
   var pcName= req.body.pComp;
   var camName= req.body.Camera;
   var tdName= req.body.TouchDisplay;
   var cDateName= req.body.Checkdate;
   var dCName= req.body.DocCamModel;
   var lHoursName= req.body.LampHours;
   var fHoursName= req.body.FilterHours;
   var tHdName= req.body.ThickHDMI;
   var rTypeName= req.body.RackType;
   var alcName= req.body.alc;
   var sCondName = req.body.ScreenCondition;
   var vgadName = req.body.VGADistance;
   var tsName = req.body.TeachingStatus;

   console.log("thdName: "+ tHdName.length);

   var tdName = req.body.TouchDisplay;
   console.log("edit room:" + roomtoedit);
   console.log("Dvd was entered: " + dvdName);
   var foundRooms = [];
   con.query("SELECT * FROM Rooms WHERE BuildingName='" +  bname +"';", function (err, result, fields) {
      if (err) throw err  ;
      //console.log(result);
      thirdData = result;
      console.log(thirdData);
      res.render('index', { title: 'Room List', myNewData: thirdData, myData: buildingFromRooms});
   });

   //Queries
   var updateproj = "UPDATE Rooms set Projector = '" + proj + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updateDvd = "UPDATE Rooms set DVDCombo = '" + dvdName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updateSwitch = "UPDATE Rooms set SwitcherScaler = '" + switchName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updateDocCam = "UPDATE Rooms set DocCamConnection = '" + docCName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updateMics = "UPDATE Rooms set MicFrequency = '" + micsName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updateAmp = "UPDATE Rooms set Amp = '" + ampName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatelEtherName = "UPDATE Rooms set LaptopEthernet = '" + lEtherName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatelhdName = "UPDATE Rooms set LaptopHDMI = '" + lhdName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatelhsName = "UPDATE Rooms set LaptopSound = '" + lhsName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatelvName = "UPDATE Rooms set LaptopVGA = '" + lvName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updateoCartName = "UPDATE Rooms set OverHeadCart = '" + oCartName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updateoHeadName = "UPDATE Rooms set OverHead = '" + oHeadName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatepcName = "UPDATE Rooms set PC = '" + pcName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatecamName = "UPDATE Rooms set Camera = '" + camName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatetd = "UPDATE Rooms set TouchDisplay = '" + tdName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatecDateName = "UPDATE Rooms set Checkdate = '" + cDateName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatedCName = "UPDATE Rooms set DocCamModel = '" + dCName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatelHoursName = "UPDATE Rooms set LampHours = '" + lHoursName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatefHoursName = "UPDATE Rooms set FilterHours = '" + fHoursName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatetHdName = "UPDATE Rooms set ThickHDMI = '" + tHdName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updaterTypeName = "UPDATE Rooms set RackType = '" + rTypeName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatealcName = "UPDATE Rooms set AvailableLaptopConnections = '" + alcName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatesCondName = "UPDATE Rooms set ScreenCondition = '" + sCondName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatevgadName = "UPDATE Rooms set VGADistance = '" + vgadName + "'" + " WHERE RoomID = '" + roomtoedit +"'";
   var updatetsName = "UPDATE Rooms set TeachingStatus = '" + tsName + "'" + " WHERE RoomID = '" + roomtoedit +"'";

   var allNames = [updateproj,updateDvd,updateSwitch,updateDocCam,updateMics,updateAmp,updatelEtherName,
    updatelhdName,updatelhsName,updatelvName,updateoCartName,updateoHeadName,updatepcName,updatecamName,
    updatetd,updatetd,updatecDateName,updatedCName,updatelHoursName,updatefHoursName,updatetHdName,
    updaterTypeName,updatealcName,updatesCondName,updatevgadName,updatetsName];
  /*
   con.query(updateDvd, function (err, result, fields) {
     //if (err) throw err  ;
     if (err) console.log("query not added, incorrect value");
   });
   con.query(updateSwitch, function (err, result, fields) {
     //if (err) throw err  ;
     if (err) console.log("query not added, incorrect value");
   });
   con.query(updateDocCam, function (err, result, fields) {
     //if (err) throw err  ;
     if (err) console.log("query not added, incorrect value");
   });
   con.query(updateMics, function (err, result, fields) {
     //if (err) throw err  ;
     if (err) console.log("query not added, incorrect value");
   });
   con.query(updateAmp, function (err, result, fields) {
     //if (err) throw err  ;
     if (err) console.log("query not added, incorrect value");
   });
   con.query(updatetd, function (err, result, fields) {
     //if (err) throw err  ;
     if (err) console.log("query not added, incorrect value");
   });*/
   function isEmpty(value){
     return (value == null || value.length === 0);
   }

   for(var x in allNames){
     if(allNames[x].length > 0){
       con.query(allNames[x], function (err, result, fields) {
         //if (err) throw err  ;
         if (err) console.log("query not added, incorrect value in:" + allNames[x] );
       });
     }
   }
});

router.post('/room', function(req, res, next){
   // req.body object has your form values
   var bname = req.body.clubname;
   var sOneName = req.body.controlSearch;
   var sTwoName = req.body.projSearch;
   var foundRooms = [];
   if(!sOneName && !sTwoName){
     con.query("SELECT * FROM Rooms WHERE BuildingID='" +  bname +"';", function (err, result, fields) {
        if (err) throw err  ;
        //console.log(result);
        thirdData = result;
        console.log(thirdData);
        res.render('index1', { title: 'Room List', myNewData: thirdData, myData: buildingFromRooms});
     });
   }
   else if(!sTwoName){
     con.query("SELECT * FROM Rooms WHERE SwitcherScaler LIKE'%" +  sOneName +"%';", function (err, result, fields) {
        if (err) throw err  ;
        //console.log(result);
        thirdData = result;
        console.log("searching for SwitcherScaler: "+ sOneName);
        console.log(thirdData);
        res.render('index1', { title: 'Room List', myNewData: thirdData, myData: buildingFromRooms});
     });
   }
   else{
     con.query("SELECT * FROM Rooms WHERE Amp LIKE'%" +  sTwoName +"%';", function (err, result, fields) {
        if (err) throw err  ;
        //console.log(result);
        thirdData = result;
        console.log("searching for amp: "+ sTwoName);
        console.log(thirdData);
        res.render('index1', { title: 'Room List', myNewData: thirdData, myData: buildingFromRooms});
     });
   }
});

router.get('/room', function(req, res, next) {
  res.render('index1', { title: 'Change Room Info', myData: buildingFromRooms});
});

/*router.get('/room:bname', function(req, res, next) {
  var inputBname = String(req.params.name);
  var bidSearch = "SELECT BuildingID FROM Buildings WHERE BuildingName='" + inputBname + ";";
  var foundBid;
  console.log("Searching ID for " + inputBname);
  con.query(bidSearch, function (err, result, fields) {
     if (err) throw err  ;
     foundBid = result;
  });
  res.render('index1', { title: 'Change Room Info', myData: buildingFromRooms});
});*/

router.get('/changes:rname/:bname', function(req, res, next) {
  var inputRoom = String(req.params.rname);
  var inputBuilding = String(req.params.bname);
  inputRoom = inputRoom.substring(1, inputRoom.length);
  singleRoomData = [];
  console.log("This is from the get method" + inputRoom);
  console.log("input room length:" + inputRoom.length);
  if(inputRoom.length>2){
    con.query("SELECT * FROM Rooms WHERE RoomID='" +  inputRoom +"';", function (err, result, fields) {
       if (err) throw err  ;
       singleRoomData = result;
       console.log("printing result of query:");
       console.log(singleRoomData);
       //learned here: you need to specify the index for the rowdata object
       res.render('changes', { title: 'Room Updates', myRoomData: singleRoomData[0]});
    });
  }
  else{
    con.query("SELECT * FROM Rooms WHERE RoomID='" +  inputRoom +"';", function (err, result, fields) {
       if (err) throw err  ;
       singleRoomData = result;
       console.log("printing result of query:");
       console.log(singleRoomData);
       //learned here: you need to specify the index for the rowdata object
       res.render('changes', { title: 'Room Updates', myRoomData: singleRoomData[0]});
    });
  }
});

router.get('/changes', function(req, res, next){
  var dummy = "";
  res.render('changes', { title: 'Room Updates', myRoomData: dummy });
});


module.exports = router;
