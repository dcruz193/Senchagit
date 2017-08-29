/*
Copyright(c) 2012 Company Name
*/
Ext.define("Daniel.grid.column.Column",{extend:"Ext.grid.column.Column",alias:["widget.dcol"],text:"Daniel Col",dataIndex:"dcol"});Ext.define("Daniel.grid.Panel",{extend:"Ext.grid.Panel",requires:["Daniel.grid.column.Column"],title:"Daniel grid",columns:[{xtype:"dcol",},{text:"Name",dataIndex:"name"},{text:"Email",dataIndex:"email",flex:1},{text:"Phone",dataIndex:"phone"}],height:200,width:400,});
