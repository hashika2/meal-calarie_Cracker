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
        // addItem:function(){
        //     console.log(name,calaries);
        // },
        
        // getItems:function(){
        //     return data.item;
        // },
        addItem:function(){
            let ID;
            //create id
            if(data.item.length>0){
                ID=data.item[data.item.length-1].id+1;
               
            } else{
                ID=0
            }

            //calaries to numbrt
            calaries =parseInt(calaries);

            //create new item
            newItem=new Item(ID,name,calaries);

            //add to items array
            data.items.push(newItem);
            return newItem;
        },
        logData:function(){
            return data;
        }
    }


})();

//ui Controller
const UiCtrl=(function(){
    const UiSelectors= {
        itemlist:'#item-list',
        addbtn:'.add-btn',
        itemNameInput :'#item-name',
        itemCalariesInput:'#item-calaries'
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
        },
        getItemInput:function(){
            return {
                name:document.querySelector(UiSelectors.itemNameInput).value,
                calaries:document.querySelector(UiSelectors.itemCalariesInput).value
            }
        },
        addlistItem:function(item){
            //show the ist
            document.querySelector(UiSelectors.itemlist).style.display ='block';

                document.querySelector(UiSelectors.itemCalariesInput).value
                //create li element
                const li =document.createElement('li');
                //add class
                li.className='collection-item';
                // add id
                li.id=`item-${item.id}`;
                //add html
                li.innerHTML =`</strong> <em>${item.name}</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`

                //insert item
                document.querySelector(UiSelectors.itemlist).insertAdjacentElement('beforeend',li);
        },
        clearInput:function(){
            document.querySelector(UiSelectors.itemNameInput).value='';
            document.querySelector(UiSelectors.itemCalariesInput).value='';
        },
        hidelist:function(){
            document.querySelector(UiSelectors.itemlist).style.display='none';
        },

        getSelectors:function(){
             return UiSelectors;
        }
    }

})();

//app controller
const App=(function(ItemCtr,UiCtrl){
    //load event listners
    const loadEventlisteners =function(){
        //get ui select ors
        const UiSelectors =UiCtrl.getSelectors();

        //add item event
        document.querySelector(UiSelectors.addbtn).addEventListener('click ',itemAddSumbit);
    }
    //add item submit
    const itemAddSumbit=function(e){
        //get form input ui controller
        const input=UiCtrl.getItemInput();
        if(input.name!==null && input.calaries!= ''){
            const newItem=ItemCtr.addItem(input.name,input.calaries);
        }
         //add item to ui
         UICtrl.addlistItem(newItem);

        e.preventDefault();

    }

    return{
        init:function(){
            
            //fetch items from data structure
            const items =ItemCtr.getItems();

            //check if any items
            if(items.length ===0){
                UiCtrl.hidelist();
                console.log("hashika")
            }else{
                //populate list with items
               UiCtrl.populateItemist(items); 
            }

            

            //load event listner
            loadEventlisteners()
            
        }
    }
    

})(ItemCtr,UiCtrl);

//initializing
App.init();