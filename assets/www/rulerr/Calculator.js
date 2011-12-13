/**
 * ...
 * @author: V.Pavkin
 */

Ext.define('rulerr.Calculator', {
	extend:'Ext.Panel',
	config:{
		fullscreen:true,
		layout:'fit',

		items:[
			{
				xtype:'titlebar',
				id:'header',
				title:'AAAAA',
				docked:'top'
			},
			{
				xtype:'panel',
				layout:'card',
				//layout:{
				//	type:'card',
				//	animation:{
				//		type:'fade'
				//	}
				//},
				items:[
					//Ext.create('rulerr.CalcCard', {}),
					{
						xtype:'calccard'
					}
					,
					Ext.create('rulerr.HistoryCard', {
						id:'historyCard'
					})
				]
			}

		]
	}
})
