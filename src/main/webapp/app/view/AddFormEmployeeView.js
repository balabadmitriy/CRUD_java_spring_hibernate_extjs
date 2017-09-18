Ext.define('EmployeeList.view.AddFormEmployeeView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addFormEmployeeView',
    autoShow: true,
    layout: 'fit',
    autoSync:true,
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'firstName',
                    fieldLabel: 'Имя',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'lastName',
                    fieldLabel: 'Фамилия',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'position',
                    fieldLabel: 'Должность',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'combobox',
                    store:'DepartmentStore',
                    name: 'department',
                    queryMode:'remote',
                    valueField:'id',
                    displayField:'departmentName',
                    fieldLabel: 'Подразделение',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Сохранить',
            action: 'save',
            disabled: true

        },
        {
            text: 'Отменить',
            handler: function () {
                this.up('window').close();
            }

        }
    ]

});