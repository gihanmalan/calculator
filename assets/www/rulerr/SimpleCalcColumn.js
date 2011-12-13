/**
 * ...
 * @author: V.Pavkin
 */

Ext.define('rulerr.SimpleCalcColumn', {
	extend:'Ext.Panel',

	xtype:'simplecalccolumn',
	config:{
		keys:null,
		layout:'vbox',
		defaults:{
			xtype:'button',
			flex:1
		},
		cls:'simple-column'
	}
	,
	constructor:function (config) {
		this.callParent(arguments);
		var keys = this.getKeys()
		Ext.Array.each(keys, function (item) {
			var b = {
				text:item.toString(),
				ui:'orange',
				listeners:{
					tap:function () {
						Ext.Msg.alert('AAAAA', 'Main button was clicked');
					}
				}
			}
			this.add(b)
		}, this)

	}
})

