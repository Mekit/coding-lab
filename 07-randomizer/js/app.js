var app = new Vue({
  el: '#app',
  data: {
    current: false,
    currentTeam: false,
    teams: []
  },

  mounted: function() {
    this.buildTeams();
    if (localStorage.randomizerTeams) {
      this.teams = JSON.parse(localStorage.randomizerTeams);
    }
  },

  methods: {
    buildTeams: function() {
      this.teams = [];
      for (let t = 1; t < 19; t++) {
        var formattedNumber = ("0" + t).slice(-2);
        this.teams.push({
          img: 'imgs/t-' + formattedNumber + '.png',
          name: 'T' + formattedNumber,
          on: true,
          key: t - 1,
        });
      }
    },

    toggleClick: function(team){
      team.on = !team.on;
      this.saveData();
    },

    itemClick: function(t){
      if (this.teams[t].on){
        this.setCurrent(t);
      }
    },

    setCurrent: function(t){
      this.current = t;
      this.currentTeam = this.teams[t];
    },

    closeFs: function(){
      let t = this.current;
      this.teams[t].on = false;
      this.current = false;
      this.currentTeam = false;
      this.saveData();
    },

    randomize: function(){
      let remaining = this.teams.filter(team => team.on);
      // https://stackoverflow.com/a/23976260
      let randomItem = remaining[remaining.length * Math.random() | 0];
      this.setCurrent(randomItem.key);
    },

    reset: function(){
      this.buildTeams();
      this.saveData();  
    },

    // ** SAVING **
    // ------------
  
    saveData: function(){
      localStorage.randomizerTeams = JSON.stringify(this.teams);
    },

    // ** THEMING **
    // -------------

    teamClass: function(item){
      let classes = [];
      if (item.on){
        classes.push('team--on');
      } else {
        classes.push('team--off');
      }
      return classes.join(' ');
    }
  }
})