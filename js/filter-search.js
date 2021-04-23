(function() {                             // Lives in an IIFE
  var $imgs = $('#gallery img');          // Get the images
  var $search = $('#filter-search');      // Get the input element
  var cache = [
    {
      bank:'招商',mcc:[4812,5441,5661,5733,5944,5976,5094,5211,5451,5462,5681,5691,5734,5735,5945,5946,5977,5978,
        5231,5499,5697,5912,5947,5983,5251,5261,5309,5310,5311,5331,5399,5422,5532,5533,5611,5621,5698,5699,5712,5713,5921,5931,5932,5937,5948,5949,5950,5970,5992,5993,5995,5996,5631,5641,5714,5718,5940,5941,5971,5972,5997,5999,5651,5655,
        5719,5732,5942,5943,5973,5975,7993,8043,4733,5812,5813,5814,7011,7012,7032,7033,7297,7298,7829,7832,7911,7922,7929,7932,7933,7941,7991,7992,7994,7995,7996,7997,7998,7999,5962,5963,5964,5965,5966,5967,5968,5969,6010,6011,6051,6211
      ], include:true
    },
    {
      bank:'广发',mcc:[5933,1520,5271,5511,5521,5551,5561,5571,5592,5598,5599,7013,9704,8062,8211,8220,8398,4814,
        4899,4900,5960,6300,8651,9211,9222,9223,9311,9399,9400,9402,9706,4458,5013,5021,5039,5044,5045,5046,5047,5051,5065,
        5072,5074,5111,5122,5131,5137,5139,5172,5192,5193,5198,5398,5998,9705,4821,6010,6011,6012,6051,6211,7299,7995,8011,8021,8031,8041,8042,8049,8050,8071,8099,8241,8244,8249,8299,8351,8641,8661,8699,8931,9708], include:false
    },
    {
      bank:'中信',mcc:[5411,5311,5812,5094,7011,5541,7298,5722,5211,5712,5732,5331,5813,5499,5691,5699,5977,5651,
        5399,7911, 5251,7297,7997,4812,5533,5999,5921,7538,5661,5970,5944,5948,5932,5814,5912,5641,5621,5719,5943,5947,5993,5941,7531,5949,5734,8043,5462,5971,5611,5714,7512,5309,7999,5983,7631,5631,5992,5231,5962,5451,5733,5532,7992,5655,5950,5713,5995,5937,5681,5940,5942,7932,7994,7542,7941,4215,7629,5946,5422,5945,5441,7991,7832,5310,7933,7535,7996,5969
        ,7394,7998,5735,7012,5964,7622,4733,7993,7375,7033,7534,7032,5261,7922,5697,5931,5972,7995,7296,7829,4411,7623], include:true
    },
    {
      bank:'中信南航',mcc:[7011,7012,3501,3503,3509,3512,3520,3530,3533,3545,3594,3638,3640,3641,3668,3722,3742,
        3750,5812,5813,4511,3001,3005,3007,3008,3009,3010,3015,3016,3020,3022,3026,3034,3037,3042,3051,3058,3061,3068,3072,3075,3077,3079,3082,3084,3099,3100,3110,3136,3144,3161,3294,3296,3298], include:true
    },
    {
      bank:'兴业东航',mcc:[5541,5542,5411,5722,5094,1000,1001,1002,1520,1731,1740,1750,1761,1771,2741,2791,2842,4458,
        4784,4814,4821,4899,4900,4901,5013,5021,5039,5044,5045,5046,5047,5051,5065,5072,5074,5111,5122,5131,5137,
        5139,5169,5172,5192,5193,5198,5271,5398,9498,5251,5533,7538,4816,8912,5912,7278,6513,7531,5511,5521,5551,
        5561,5571,5592,5598,5599,5933,5960,5998,6012,6013,6014,6015,6016,6050,6300,6398,6529,6530,6531,6532,6533,
        6534,6535,6760,7013,7276,8062,8011,8021,8031,8041,8042,8049,8099,8211,8220,8351,8241,8398,8399,8651,9405,
        9402,9411,9211,9222,9223,9311,9399,9400,9701,9702,9704,9705,9706,9708,9751,9752,9950,5211,8011,8911,4214,
        7372,8249,7277,4511,0763,4789,6051,7549,0780,5074,7210,7841,3998,5411,7216,8050,4011,5441,7299,8071,4111,5451,7311,	8111,4112,5722,7321,8244,4119,5811,7333,8299,4121,5935,7338,8641,4131,5942,7339,8661,4215,5992,7361,8675,4457,5997,	7392,8699,4468,6010,7393,8931,4582,6011,7399,8999], include:false
    },
    {
      bank:'交通',mcc:[0763,1520,3828,4458,4900,5013,5021,5039,5044,5045,5046,5047,5051,5065,5072,5074,5111,5122,5131,
        5137,5139,5172,5192,5193,5198,5271,5398,5411,5511,5521,5551,5561,5571,5592,5598,5599,5933,5960,5998,6010,6011,6012,
        6300,6761,7013,7800,7801,7802,8011,8021,8031,8041,8042,8049,8062,8099,8211,8220,8241,8351,8398,8399,8651,9211,9222,
        9223,9311,9399,9400,9411,9498,9704,9705,9706,9708],include:false
    },
    {
      bank:'工商',mcc:[1520,7013,5271,5511,5521,5551,5561,5571,5592,5598,5599,5933,5013,5021,5039,5044,5045,5046,5047,
        5051,5065,5072,5074,5111,5122,5131,5137,5139,5172,5192,5193,5198,5998,8062,8211,8220,8398,8651,9211,9222,9223,9311,
        9399,9400,4900,6300,5960,5398,4458,9498,8999,5399,7299,3998,4111,4112,4121,4131,4511,4784,4814,4899,5541,5542,5722,
        5994,7523,9402,0763,5411],include:false
    },
    {
      bank:'建行南航',mcc:[1520,7013,5271,5511,5521,5551,5561,5571,5592,5598,5599,5933,5013,5021,5039,5044,5045,5046,5047,
        5051,5065,5072,5074,5111,5122,5131,5137,5139,5172,5192,5193,5198,5998,5398,4458,8062,8211,8220,8398,8399,8651,8999],include:false
    },
    {
      bank:'汇丰',mcc:[5722,4111,4121,4131,4784,4112,9402,8211,8220,8351,8241,6012,9498,6761,5933,6300,6010,6011,
        7299,4900,7523,5398,4458,5013,5021,5039,5044,5045,5046,5047,5051,5065,5072,5074,5111,5122,5131,5137,5139,5172,5192,5193,5198,5998,5271,5511,5521,5551,5561,5571,5592,5598,5599,763,8651,8011,8031,8041,8042,8049,8062,8099,8021,5994,
        4814,4899,8398,9211,9222,9223,9311,9400,9399,5960],include:false
    },
    {
      bank:'浦发',mcc:[5172,5192,5193,5198,5271,5511,5521,5551,5561,5571,5592,5598,5599,4902,9211,9222,9223,9311,9399,6399,
        8399,4901,9999,6012,9411,9400,1520,4900,5013,5021,5039,5044,5045,5046,5047,5051,5065,5072,5074,5111,5122,5131,5137,
        5139,4458,9708,5998,6300,7013,5398,9704,3198,9221,5127,9705,8022,5933,5960,5964,5969,8062,8063,8211,8220,8241,8244,
        8249,8299,8351,8398,8651,1771,5262],include:false
    },
    {
      bank:'光大',mcc:[4900,5411,5541,5542,4111,4121,4131,4511,4784,5900,6300],include:false
    }

];                         // Create an array called cache

  $imgs.each(function() {                 // For each image
    cache.push({                          // Add an object to the cache array
      element: this,                      // This image
      text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
    });
  });

  function filter(query) {                     // Declare filter() function    
    var result = cache.filter(function(item) {         // For each entry in cache pass image 
      // console.log(item.mcc)
      // console.log(item.mcc.find(n => n==query))
      if (item.include) {
        if (item.mcc.find(n => n==query) !== undefined) {
          return true
        }
      } else {
        if (item.mcc.find(n => n==query) === undefined) {
          return true
        }
      }


    });
    $("#content").find("li").remove();
    result.forEach(item => {
      $('#content').append('<li class="hot" >'+item.bank+'</li>');
    })
    
    console.log('result: ' + JSON.stringify(result))
  }

  // if ('oninput' in $search[0]) {          // If browser supports input event
  //   $search.on('input', filter);          // Use input event to call filter()
  // } else {                                // Otherwise
  //   $search.on('keyup', filter);          // Use keyup event to call filter()
  // }              

  $search.keydown(function(event){
    if(event.keyCode==13){
      filter($search.val())
    }
  });

}());