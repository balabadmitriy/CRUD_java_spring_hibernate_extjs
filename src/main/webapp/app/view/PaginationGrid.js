Ext.define('EmployeeList.view.PaginationGrid', {
    extend: 'Ext.PagingToolbar',
    alias: 'widget.paginationGrid',
    store: 'EmployeeStore',
    dock: 'bottom',
    id: 'displayInfo',
    displayInfo: true,
    beforePageText: 'Страница',
    afterPageText: 'из {0}',
    displayMsg: 'Пользователи {0} - {1} из {2}',
    moveNext:function(){
        var me = this,
            total = me.getPageData().pageCount,
            next = me.store.currentPage + 1;
        if(next <= total){
            if(me.fireEvent('beforechange',me,next) !== false){
                var searchVar = Ext.getCmp('searchId').value;
                me.store.nextPage({
                    params:{
                        search: searchVar
                    }
                });
            }
        }
    },
    movePrevious:function(){
        var me = this,
            prev = me.store.currentPage - 1;

        if (prev > 0) {
            if (me.fireEvent('beforechange', me, prev) !== false) {
                var searchVar = Ext.getCmp('searchId').value;
                me.store.previousPage({
                    params:{
                        search: searchVar
                    }
                });
            }
        }
    },
    moveFirst : function(){
        if (this.fireEvent('beforechange', this, 1) !== false){

            var searchVar = Ext.getCmp('searchId').value;
            this.store.loadPage(1,{
                params:{
                    search:searchVar
                }
            });
        }

    },
    moveLast : function(){
        var me = this,
            last = me.getPageData().pageCount;

        if (me.fireEvent('beforechange', me, last) !== false) {
            var searchVar = Ext.getCmp('searchId').value;
            me.store.loadPage(last,{
                params:{
                    search:searchVar
                }
            });
        }
    },
    doRefresh:function(){
        var me= this,
            current = me.store.currentPage;
        if (me.fireEvent('beforechange', me, current) !== false) {
            var searchVar = Ext.getCmp('searchId').value;
            me.store.loadPage(current,{
                params:{
                    search:searchVar
                }
            });
        }
    }
})