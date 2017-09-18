Ext.define('EmployeeList.model.HierarchyOfDep', {
    extend: 'Ext.data.Model',
    fields: ['id','parent_id'],
    pageSize:1,
    /*proxy: {
        type: 'ajax',
        api: {
            create: 'department/post',
            read: 'department/get',
            destroy: 'department/delete',
            update: 'department/put'

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
    }*/
});