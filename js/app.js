// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })


  
    .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })
  
  
      .state('app.list', {
      url: "/list",
      views: {
        'menuContent': {
          templateUrl: "templates/list.html",
          //controller: 'PlaylistsCtrl'
        }
      }
    })
  
  
    .state('app.schedule', {
    url: "/schedule",
    views: {
      'menuContent': {
        templateUrl: "templates/schedule.html",
		controller: 'PlaylistsCtrl2'
      }
    }
  })
  
    .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })
  

  .state('app.rotavirus', {
    url: "/rotavirus",
    views: {
      'menuContent': {
        templateUrl: "templates/rotavirus.html"
      }
    }
  })

  .state('app.single', {
    url: "/schedule/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistsCtrl2'
      }
    }
  })
  
  
  
  //App content pages
  
      .state('app.pregnancy', {
    url: "/pregnancy",
    views: {
      'menuContent': {
        templateUrl: "templates/pregnancy.html"
      }
    }
  })

  
    .state('app.birth', {
    url: "/birth",
    views: {
      'menuContent': {
        templateUrl: "templates/birth.html"
      }
    }
  })
  
  
      .state('app.birth_1', {
    url: "/birth_1",
    views: {
      'menuContent': {
        templateUrl: "templates/birth_1.html"
      }
    }
  })
  
  
  
  
      .state('app.2m', {
    url: "/2m",
    views: {
      'menuContent': {
        templateUrl: "templates/2m.html"
      }
    }
  })
  
      .state('app.4m', {
    url: "/4m",
    views: {
      'menuContent': {
        templateUrl: "templates/4m.html"
      }
    }
  })
  
        .state('app.6m', {
    url: "/6m",
    views: {
      'menuContent': {
        templateUrl: "templates/6m.html"
      }
    }
  })
  
  
          .state('app.12m', {
    url: "/12m",
    views: {
      'menuContent': {
        templateUrl: "templates/12m.html"
      }
    }
  })
  
  
    .state('app.18m', {
    url: "/18m",
    views: {
      'menuContent': {
        templateUrl: "templates/18m.html"
      }
    }
  })
  
  
      .state('app.3y', {
    url: "/3y",
    views: {
      'menuContent': {
        templateUrl: "templates/3y.html"
      }
    }
  })
  
      .state('app.7y', {
    url: "/7y",
    views: {
      'menuContent': {
        templateUrl: "templates/7y.html"
      }
    }
  })
  
      .state('app.9y', {
    url: "/9y",
    views: {
      'menuContent': {
        templateUrl: "templates/9y.html"
      }
    }
  })
  
 
       .state('app.risk', {
    url: "/risk",
    views: {
      'menuContent': {
        templateUrl: "templates/special-list.html"
      }
    }
  }) 
  
         .state('app.states', {
    url: "/states",
    views: {
      'menuContent': {
        templateUrl: "templates/other-states.html"
      }
    }
  }) 
  
  
  
  
      .state('app.10y', {
    url: "/10y",
    views: {
      'menuContent': {
        templateUrl: "templates/10y.html"
      }
    }
  })	
	
	
	      .state('app.sr-12m', {
    url: "/sr-12m",
    views: {
      'menuContent': {
        templateUrl: "templates/sr-12m.html"
      }
    }
  })		
	      .state('app.sr-15y', {
    url: "/sr-15y",
    views: {
      'menuContent': {
        templateUrl: "templates/sr-15y.html"
      }
    }	
  })	
	      .state('app.sr-4y', {
    url: "/sr-4y",
    views: {
      'menuContent': {
        templateUrl: "templates/sr-4y.html"
      }
    }		
  })	
	      .state('app.sr-6m', {
    url: "/sr-6m",
    views: {
      'menuContent': {
        templateUrl: "templates/sr-6m.html"
      }
    }		
  })	
  
  
  
  	      .state('app.sr_50y', {
    url: "/sr_50y",
    views: {
      'menuContent': {
        templateUrl: "templates/sr_50y.html"
      }
    }		
  })	
  
  
  
  
  	      .state('app.sr_59y', {
    url: "/sr_59y",
    views: {
      'menuContent': {
        templateUrl: "templates/sr_59y.html"
      }
    }		
  })	
  
  
  
  
  	      .state('app.sr_65y', {
    url: "/sr_65y",
    views: {
      'menuContent': {
        templateUrl: "templates/sr_65y.html"
      }
    }		
  })	
  
  
    	      .state('app.sr_any', {
    url: "/sr_any",
    views: {
      'menuContent': {
        templateUrl: "templates/sr_any.html"
      }
    }		
  })	
  
  
  
  
	
	      .state('app.hepatitis', {
    url: "/hepatitis",
    views: {
      'menuContent': {
        templateUrl: "templates/hepatitis.html"
      }
    }		
  })	
	      .state('app.hepB', {
    url: "/hepB",
    views: {
      'menuContent': {
        templateUrl: "templates/hepB.html"
      }
    }			
  })	
	      .state('app.human-papilloma', {
    url: "/human-papilloma",
    views: {
      'menuContent': {
        templateUrl: "templates/human-papilloma.html"
      }
    }		
  })	
  
  
  
 	      .state('app.influenza', {
    url: "/influenza",
    views: {
      'menuContent': {
        templateUrl: "templates/influenza.html"
      }
    }		
  })	 
  
  
 	      .state('app.meningococcal', {
    url: "/meningococcal",
    views: {
      'menuContent': {
        templateUrl: "templates/meningococcal.html"
      }
    }		
  })	  
  
  
   	      .state('app.MMR', {
    url: "/MMR",
    views: {
      'menuContent': {
        templateUrl: "templates/MMR.html"
      }
    }		
  })	
  
   	      .state('app.pneumococcal', {
    url: "/pneumococcal",
    views: {
      'menuContent': {
        templateUrl: "templates/pneumococcal.html"
      }
    }		
  })
  
     	      .state('app.contactus', {
    url: "/contactus",
    views: {
      'menuContent': {
        templateUrl: "templates/contactus.html"
      }
    }		
  })
  
       	      .state('app.disclaimer', {
    url: "/disclaimer",
    views: {
      'menuContent': {
        templateUrl: "templates/disclaimer.html"
      }
    }		
  })
  
       	      .state('app.vic-prog', {
    url: "/vic-prog",
    views: {
      'menuContent': {
        templateUrl: "templates/vic-prog.html"
      }
    }		
  })  
    
  .state('app.mmr_ii', {
    url: "/mmr_ii",
    views: {
      'menuContent': {
        templateUrl: "templates/mmr_ii.html"
      }
    }		
  })  
  
    .state('app.boostrix', {
    url: "/boostrix",
    views: {
      'menuContent': {
        templateUrl: "templates/boostrix.html"
      }
    }		
  })  
  
  
  
    .state('app.a_Influenza', {
    url: "/a_Influenza",
    views: {
      'menuContent': {
        templateUrl: "templates/a_Influenza.html"
      }
    }		
  })  
  
  
  
  
      .state('app.6weeks_1', {
    url: "/6weeks_1",
    views: {
      'menuContent': {
        templateUrl: "templates/6weeks_1.html"
      }
    }		
  }) 
  
        .state('app.6weeks_2', {
    url: "/6weeks_2",
    views: {
      'menuContent': {
        templateUrl: "templates/6weeks_2.html"
      }
    }		
  }) 
  
  
          .state('app.12months_1', {
    url: "/12months_1",
    views: {
      'menuContent': {
        templateUrl: "templates/12months_1.html"
      }
    }		
  }) 
  
  
  
          .state('app.12months_2', {
    url: "/12months_2",
    views: {
      'menuContent': {
        templateUrl: "templates/12months_2.html"
      }
    }		
  }) 
  
  
  .state('app.18months_1', {
    url: "/18months_1",
    views: {
      'menuContent': {
        templateUrl: "templates/18months_1.html"
      }
    }		
  }) 
  
  
 .state('app.18months_2', {
    url: "/18months_2",
    views: {
      'menuContent': {
        templateUrl: "templates/18months_2.html"
      }
    }		
  }) 
  
  
   .state('app.3years_1', {
    url: "/3years_1",
    views: {
      'menuContent': {
        templateUrl: "templates/3years_1.html"
      }
    }		
  }) 
  
  
    .state('app.12years_1', {
    url: "/12years_1",
    views: {
      'menuContent': {
        templateUrl: "templates/12years_1.html"
      }
    }		
  }) 
     
	    .state('app.12years_2', {
    url: "/12years_2",
    views: {
      'menuContent': {
        templateUrl: "templates/12years_2.html"
      }
    }		
  })  


	    .state('app.12years_3', {
    url: "/12years_3",
    views: {
      'menuContent': {
        templateUrl: "templates/12years_3.html"
      }
    }		
  })  
     
	    .state('app.50y', {
    url: "/50y",
    views: {
      'menuContent': {
        templateUrl: "templates/50y.html"
      }
    }		
  })	 
	 
	    .state('app.50years_1', {
    url: "/50years_1",
    views: {
      'menuContent': {
        templateUrl: "templates/50years_1.html"
      }
    }		
  })	
  
  
 	    .state('app.65y', {
    url: "/65y",
    views: {
      'menuContent': {
        templateUrl: "templates/65y.html"
      }
    }		
  })
  
  
  
  	    .state('app.70y', {
    url: "/70y",
    views: {
      'menuContent': {
        templateUrl: "templates/70y.html"
      }
    }		
  })
  
   
  	    .state('app.65years_1', {
    url: "/65years_1",
    views: {
      'menuContent': {
        templateUrl: "templates/65years_1.html"
      }
    }		
  })
  
  
  	    .state('app.65years_2', {
    url: "/65years_2",
    views: {
      'menuContent': {
        templateUrl: "templates/65years_2.html"
      }
    }		
  })
  
  
    	    .state('app.70years_1', {
    url: "/70years_1",
    views: {
      'menuContent': {
        templateUrl: "templates/70years_1.html"
      }
    }		
  })
   
   
       	    .state('app.risk_list', {
    url: "/risk_list",
    views: {
      'menuContent': {
        templateUrl: "templates/risk_list.html"
      }
    }		
  })
  
  
  
         	    .state('app.risk_1', {
    url: "/risk_1",
    views: {
      'menuContent': {
        templateUrl: "templates/risk_1.html"
      }
    }		
  })
  
  
           	    .state('app.risk_2', {
    url: "/risk_2",
    views: {
      'menuContent': {
        templateUrl: "templates/risk_2.html"
      }
    }		
  })
  
  
           	    .state('app.risk_3', {
    url: "/risk_3",
    views: {
      'menuContent': {
        templateUrl: "templates/risk_3.html"
      }
    }		
  })
  
           	    .state('app.risk_4', {
    url: "/risk_4",
    views: {
      'menuContent': {
        templateUrl: "templates/risk_4.html"
      }
    }		
  })
  

  
   .state('app.sr-4y_1', {
    url: "/sr-4y_1",
    views: {
      'menuContent': {
        templateUrl: "templates/sr-4y_1.html"
      }
    }		
  })  
  
  
  
  
     .state('app.special-list-group', {
    url: "/special-list-group",
    views: {
      'menuContent': {
        templateUrl: "templates/special-list-group.html"
      }
    }		
  })  
  
 
      .state('app.travel', {
    url: "/travel",
    views: {
      'menuContent': {
        templateUrl: "templates/travel.html"
      }
    }		
  })  
  
     .state('app.sr-12m-pre_1', {
    url: "/sr-12m-pre_1",
    views: {
      'menuContent': {
        templateUrl: "templates/sr-12m-pre_1.html"
      }
    }		
  })  
  
     .state('app.sr-12m-pre', {
    url: "/sr-12m-pre",
    views: {
      'menuContent': {
        templateUrl: "templates/sr-12m-pre.html"
      }
    }		
  })    
  
  
       .state('app.15_16_years', {
    url: "/15_16_years",
    views: {
      'menuContent': {
        templateUrl: "templates/15_16_years.html"
      }
    }		
  })    
  
  
  
       .state('app.15_16_years_2', {
    url: "/15_16_years_2",
    views: {
      'menuContent': {
        templateUrl: "templates/15_16_years_2.html"
      }
    }		
  })    
  
  
  
  
  
       .state('app.sr-12m_1', {
    url: "/sr-12m_1",
    views: {
      'menuContent': {
        templateUrl: "templates/sr-12m_1.html"
      }
    }		
  })    
  
  
 
  
 ;
	
	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
