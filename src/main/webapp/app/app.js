Ext.application({
    name: 'EmployeeList',

    views: [
        'AddFormEmployeeView',
        'EmployeeCatalogView',
        'EmployeeGridView',
        'SearchEmployeeView',
        'PaginationGrid'
    ],

    controllers : [
        'EmployeeController'
    ],

    stores : [
        'EmployeeStore',
        'DepartmentStore'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype  : 'employeeCatalogView'
            }
        });
    }
});