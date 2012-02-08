var TopicHelper = {
  _cacheJSON: "",
  _cacheTopics: {},
  transform: function(topicsJson){
    if(topicsJson === this._cache){
      var topicsObj = _cacheTopics || {};
    }
    else{
      var topicsObj = JSON.parse(topicsJson) || {};
    }
    
    var topicsArr = [];

    if (topicsObj.r === "0"){     
      var topicsShema = { 
        "fav": { topicNames: topicsObj.newFavTopicList, ids: topicsObj.newFavTopicListIDs },
        "contrib": {topicNames: topicsObj.newContribTopicList, ids: topicsObj.newContribTopicListIDs}
      }     
      for(var type in topicsShema){
        for(var topic in topicsShema[type].topicNames){
          topicsArr.push(Topic(topicsShema[type].ids[topic], topicsShema[type].topicNames[topic], type));
        }
      }
    } else {
      topicsArr.push(Topic("000","Trenutno niste prijavljeni","info"));
    }
  return topicsArr.length ? topicsArr : [Topic("111","Nema nepročitanih tema","info")];
  }
}
