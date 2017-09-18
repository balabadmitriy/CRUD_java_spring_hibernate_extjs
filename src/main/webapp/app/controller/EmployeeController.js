Ext.define('EmployeeList.controller.EmployeeController', {
    extend: 'Ext.app.Controller',

    refs: [
        {selector: 'employeeGridView',
            ref: 'employeeGridView'},
        {selector: 'employeeGridView button[action="add"]',
            ref: 'employeeGridAdd'},
        {selector: 'employeeGridView button[action="delete"]',
            ref: 'employeeGridDelete'},
        {selector: 'addFormEmployeeView',
            ref: 'addFormEmployeeView'},
        {selector: 'employeeCatalogView',
            ref: 'employeeCatalogView'},
        {selector: 'addFormEmployeeView textfield[name=firstName]',
            ref: 'addFormEmployeeFirstName'},
        {selector: 'addFormEmployeeView textfield[name=lastName]',
            ref: 'addFormEmployeeLastName'},
        {selector: 'addFormEmployeeView button[action=save]',
            ref: 'addFormEmployeeSave'},
    ],

    init: function () {
        this.control({
            'employeeGridView  button[action=add]': {
                click: this.onAddEmployee
            },
            'employeeGridView  button[action=delete]': {
                click: this.onDelEmployee
            },
            'employeeGridView': {
                cellclick: this.onLineGrid
            },
            '#searchId': {
                change: this.onChangeText
            },
            'addFormEmployeeView  button[action=save]': {
                click: this.onSaveEmployee
            },
            'addFormEmployeeView  textfield[name=firstName]': {
                change: this.onValidation
            },
            'addFormEmployeeView  textfield[name=lastName]': {
                change: this.onValidation
            }
        });
    },

    onSaveEmployee: function (button) {
        var me = this;
        var employeeModel = Ext.create('EmployeeList.model.EmployeeModel');
        employeeModel.set(this.getAddFormEmployeeView().down('form').getValues());
        employeeModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                var total = Ext.decode(response.response.responseText).total;
                var page =  Math.ceil(total/5);
                Ext.getStore('EmployeeStore').add(objAjax);
                me.getAddFormEmployeeView().close();
                Ext.getStore('EmployeeStore').loadPage(page,{start:page-1,limit:5});
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'Дубликат!',
                    msg: 'Такой сотрудник в базе уже есть',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }

        });
    },

    onAddEmployee: function () {
        Ext.widget('addFormEmployeeView');
    },

    onDelEmployee: function () {
        var sm = this.getEmployeeGridView().getSelectionModel();
        var rs = sm.getSelection();
        this.getEmployeeGridView().store.remove(rs[0]);
        this.getEmployeeGridView().store.commitChanges();
        this.getEmployeeGridView().store.save();
        // this.getEmployeeGridView().store.reload();
        this.getEmployeeGridDelete().disable();

    },

    onChangeText: function (textfield, newValue, oldVaue) {
        Ext.getStore('EmployeeStore').loadPage(1,{
            start:0,
            limit:5,
            params: {
                search: this.getEmployeeCatalogView().down('searchEmployeeView').getValues()
            }
        });
    },

    onLineGrid: function () {
        this.getEmployeeGridDelete().enable();
    },

    onValidation: function () {
        if (this.getAddFormEmployeeFirstName().validate() && this.getAddFormEmployeeLastName().validate()) {
            this.getAddFormEmployeeSave().enable();
        } else {
            this.getAddFormEmployeeSave().disable();
        }
    }

});