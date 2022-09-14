<template>
	<div class="bg-sand ">

		<header class="flex justify-center items-center relative text-48px">
			<h1>Todo app</h1>

		</header>
		<form class="flex justify-center" @submit.prevent>

			<div v-if="isEditing">
				<input ref="editInput" v-model="input" type="text" class=" text-dark-blue border-2px m-basic border-dark-blue rounded-16px" />
				<input type="submit" value="update" class="text-dark-blue border-2px text-20px m-basic p-7 border-dark-blue rounded-16px" @click="updateToDo(selectedId)" />
			</div>

			<div v-else>
				<input v-model="input" type="text" class=" border-2px m-basic border-light-blue rounded-16px" />
				<input type="submit" value="add" class=" bg-dark-blue p-11 text-white text-20px m-basic font-normal hover:text-dark-blue hover:bg-light-blue rounded-20px " @click="addToDo(input)" />
			</div>
		</form>
		<ol class="   list-decimal m-basic bg-light-blue p-24 rounded-12px text-20px ">
			<p  v-if="items.length===0" class="text-dark-blue  align-middle">You don't have any ToDos</p>
			<transition-group name="fade" class="divide-y-2px divide-blue-divider">
				<ToDoItem v-for="item in items" :key="item.id"  class="flex justify-between"  :item="item" :list="items" @sort="sort(item.id)" @delete="deleteToDo(item.id)" @isDone="isDone(item.id)"  @moveUp="moveUp(item.id)" @moveDown="moveDown(item.id)" @edit="editToDo(item)" ></ToDoItem>
			</transition-group>
		</ol>

	</div>
</template>

<script>
export default {
  data(){
    return{
		selectedId:null,
		isEditing:false,
    	items:[{name:"Do homework", done: false, id: 1},{name:'call my mom',done:false, id:2}],
      	input:"",
		incrementor: 2,
		progress:false,
    }
  },
  methods:{
    addToDo(input){
	  if(input){
	   this.incrementor = this.incrementor + 1;
      this.items.push({name: this.input, done: false, id: this.incrementor});
	  }
      this.input="";
    },
	deleteToDo(id){
			 this.items = this.items.filter((obj) => {
  			return obj.id !== id;
		})
    },
	editToDo(item){
		const oldItem = this.items.find((obj) => {
			 return obj.id === item.id;
		})
		this.input=oldItem.name;
		 this.selectedId=item.id;
		this.isEditing=true;
		this.$nextTick(() => {
			this.$refs.editInput.focus();
		});

	},
	updateToDo(id){
	  this.items.forEach((item) => {

		  if(item.id === id) {
			  item.name = this.input;
		  }
	  });
	  this.isEditing=false;
      this.input="";

	},
	isDone(id){

		const oldItem = this.items.find((obj) => {
			 return obj.id === id;
		})

		oldItem.done = !oldItem.done;
		 this.sort(id);
	// 	 this.items.forEach((item) => {
	// 	  if(item.id === id) {
	// 		  item.done = !item.done;
	// 	  }
	//   });
		// if(this.done===false){
		// 		this.text="open"
		// 	}else{
		// 		this.text="Done"
		// 	}
	},
	 sort(){
		 this.items.sort((a,b)=>{
			if(a.done!==b.done){
				return a.done ? 1: -1;
			}

			return 0;
		 })
		// this.items.forEach((item) => {
	 	//  if(item.id === id) {
		//   item.done = !item.done;
	  	// 	}
		// 	  this.items.push(this.items.splice(item.id, 1)[0]);
		// 	})
	 	 },
	moveUp(id){
		const index = this.items.findIndex(e => e.id === id);
		if (index > 0) {
			const el = this.items[index];
			/* this.items[index] = this.items[index - 1];
			this.items[index - 1] = el; */
			this.$set(this.items, index, this.items[index - 1]);
			this.$set(this.items, index - 1, el);
		}
},
	moveDown(id) {
		const index = this.items.findIndex(e => e.id === id);
		if (index !== -1 && index < this.items.length - 1) {
			const el = this.items[index];
			// this.items[index] = this.items[index + 1];
			// this.items[index + 1] = el;
			this.$set(this.items, index, this.items[index + 1]);
			this.$set(this.items, index + 1, el);
		}
		}
		}
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
};
.fade-enter, .fade-leave-to {
  opacity: 0;
};



</style>
