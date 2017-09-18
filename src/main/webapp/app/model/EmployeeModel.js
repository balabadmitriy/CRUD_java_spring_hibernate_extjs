Ext.define('EmployeeList.model.EmployeeModel', {
    extend: 'Ext.data.Model',
    fields: ['id','firstName', 'lastName','position',{
        name:'department',
        type:'string',
        mapping:'department.departmentName'
    }],
    proxy: {
        type: 'ajax',
        api:{
            create: 'employee/post',
            read: 'employee/get',
            destroy: 'employee/delete',
            update: 'employee/put'
        },
        reader: {
            type: 'json',
            root: 'data',
            totalProperty:'total',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});