Ext.define('EmployeeList.view.EmployeeGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.employeeGridView',
    id:'idGrid',
    width: 400,
    height: 300,
    frame: true,
    store: 'EmployeeStore',
    iconCls: 'icon-user',
    // multiColumnSort:true,
    viewConfig:{
        markDirty:false
    },
    columns: [
        {
            text: 'Имя',
            flex: 1,
            // sortable: true,
            dataIndex: 'firstName',
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            flex: 2,
            text: 'Фамилия',
            // sortable: true,
            dataIndex: 'lastName',
            editor: {
                xtype:'textfield',
                regexText: 'Имя должно содержать только буквы',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },

        {
            text: 'Должность',
            flex: 1,
            // sortable: true,
            dataIndex: 'position',
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },{
             text: 'Подразделение',
             flex: 1,
             dataIndex: 'department',
             editor:{
                xtype: 'combobox',
                store:'DepartmentStore',
                name: 'department',
                queryMode:'remote',
                valueField:'departmentName',
                displayField:'departmentName',
                fieldLabel: 'Подразделение',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
             }
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: 'Сохранить',
            cancelBtnText: 'Отменить'
        })],

    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Добавить',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'delete',
                    text: 'Удалить',
                    iconCls: 'icon-delete',
                    disabled: true
                }
            ]
        },
        {
            xtype: 'paginationGrid'
        }
    ]
});

/*
text: 'Подразделение',
    flex: 1,
    sortable: true,
    dataIndex: 'department',
    editor: {
    xtype:'textfield',
        allowBlank: false,
        blankText: 'Это поле должно быть заполнено'
},
renderer:function(m,v,r){
    return r.getDepartment().get('departmentName');
}*/
