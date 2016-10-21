module.exports=function(router){

	router.map({
		"/login":{
			component:function(resolve){
				require(["components/login"],resolve)
			}
		},
		"/home":{
			component:function(resolve){
				require(["components/home"],resolve)
			},
			subRoutes:{
				"/one/:id":{
					name:"one",
					component:function(resolve){
						require(["components/one"],resolve)
					}

				},
				"/two":{
					component:function(resolve){
						require(["components/two"],resolve)
					}
				}
			}
		}
		
	})
	router.redirect({
		"*":"/login"
	})
}
