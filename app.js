// storage controller


//item controller
const ItemCtr=(function(){
  
    //Item Constructor
    const Item =function (id,name,calaries){
        this.id=id;
        this.name=name;
        this.calaries=calaries;
    }

    // data structure / state
    const data ={
        items :[
            {id:0,name :'steak Dinner' ,calaries:1200},
            {id:1,name :'Cookies' ,calaries:1200},
            {id:2,name :'Eggs' ,calaries:1200},
        ],
        currentItem:null,
        totaCalories:0
    }
    return {
        getItems:function(){
            return data.items;
        },
        logData:function(){
            return data;
        }
    }
})();

//ui Controller
const UiCtrl=(function(){
    const UiSelectors= {
        itemlist:'#item-list'
    }
    //pubic method
    return {
        populateItemist:function(items){
            let html= '';
            
            items.forEach(function(item){
                html += ` <li class="collection-item" id="item-${item.id}">
                <strong>${item.name} :</strong> <em>${item.calaries}</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            </li>`
            });

            //insert list items
            document.querySelector(UiSelectors.itemlist).innerHTML=html; 
        }
    }

})();

//app controller
const App=(function(ItemCtr,UiCtrl){

    return{
        init:function(){
            //fetch items from data structure
            const items =ItemCtr.getItems();

            //populate list with items
            UiCtrl.populateItemist(items); 
            
        }
    }
    

})(ItemCtr,UiCtrl);

//initializing
App.init();