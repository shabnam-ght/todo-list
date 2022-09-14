<template>
	<div   class="flex items-baseline ">


		<li :class="['bg-light-blue text-20px text-dark-blue focus-within: ', {' line-through': item.done}] " >
			{{ item.name }}

		</li>
		<div class="flex justify-between">
			<button  class="border-transparent bg-dark-blue p-7 text-white text-10px m-basic font-normal hover:text-dark-blue hover:bg-light-blue rounded-20px hover:border-dark-blue border-2px" @click="editToDo(item.name)">Edit</button>
			<button :class="[{'border-dark-blue bg-light-blue p-7 text-dark-blue text-10px m-basic font-normal   rounded-20px  border-2px': item.done}, {'border-transparent bg-dark-blue p-7 text-white text-10px m-basic font-normal hover:text-dark-blue hover:bg-light-blue rounded-20px hover:border-dark-blue border-2px': !item.done}]" @click="show=!show ;isDone()">
				<span v-if="item.done">Back to list</span>
				<span v-else>Done</span>

			</button>
			<button  class="border-transparent bg-dark-blue p-7 text-white text-10px m-basic font-normal hover:text-dark-blue hover:bg-light-blue rounded-20px hover:border-dark-blue border-2px" @click='deleteToDo(item.id)'>X</button>
			<transition  name="fadeOut">
				<div v-if="!show" key="this" class="inline">
					<button class="border-transparent bg-dark-blue p-7 text-white text-30px m-basic font-normal hover:text-dark-blue hover:bg-light-blue rounded-20px hover:border-dark-blue border-2px " @click="moveUp()">&#x2191;</button>
					<button  class="border-transparent bg-dark-blue p-7 text-white text-30px m-basic font-normal hover:text-dark-blue hover:bg-light-blue rounded-20px hover:border-dark-blue border-2px " @click="moveDown()">&#8595;</button>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		item:Object,
		list:Array,
		done:Boolean,
	},
data(){
return{
	show:false,
}},
	methods:{
		deleteToDo(){
			this.$emit("delete")
		},
		editToDo(){
			this.$emit("edit")
		},
		isDone(){

			this.$emit("isDone")

			//  this.$nextTick(() => {
				// this.$emit("sort")
			//  });
		},
		moveUp(){
			this.$emit("moveUp")
},
		moveDown(){
			this.$emit("moveDown")
},
	}
}
</script>
<style>
.fadeOut-enter-active, .fadeOut-leave-active{
	transition: opacity 0.8s ease-in-out;
}
.fadeOut-enter, .fadeOut-leave-to{
opacity: 0;
}
</style>
