/**
 * ...
 * @author: V.Pavkin
 */

Ext.define('rulerr.CalcCard', {
	extend:'Ext.Panel',
	xtype:'calccard',
	config:{
		layout:'vbox',
		items:[
			{
				xtype:'panel',
				//cls:'calculator-main',
				flex:4,
				defaults:{
					flex:1
				},
				layout:'hbox',
				items:[
					{
						xtype:'simplecalccolumn',
						keys:[1, 4, 6, '0'],
						listeners:{
							tap:function () {
								alert('vvv')
							}
						}
					},
					{
						xtype:'simplecalccolumn',
						keys:[2, 5, 8, '(']
					},
					{
						xtype:'simplecalccolumn',
						keys:[3, 6, 9, ')']
					},
					{
						xtype:'simplecalccolumn',
						keys:['+', '-', '*', '=']
					}
				]
			},
			{
				xtype:'panel',
				//cls:'calculator-bottom',
				flex:1,
				defaults:{
					flex:1
				},
				layout:'hbox',
				items:[
					{
						xtype:'button',
						text:','
					},
					{
						xtype:'button',
						text:'='
					}
				]
			}
		]
	}
})

