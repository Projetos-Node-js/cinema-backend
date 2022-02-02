const express = require('express');



const routes = express.Router();

const favicon = new Buffer.from('77+9UE5HDQoaCgAAAA1JSERSAAAAZAAAAGQIBgAAAHDvv71UAAAABmJLR0QA77+9AO+/vQDvv73vv73vv73vv73vv70AABrvv71JREFUeO'+
                                '/ve+/vXd477+9Re+/ve+/vX9z77+9Se+/vUnvv710CCAE77+9JBEQFARFLO+/ve+/ve+/vVpQdO+/ve+/vS7vv71rXXXvv71e77+9VXbdte+'/
                                'vSxi77+9Au+/ve+/ve+/vSBKF++/ve+/vdCE77+9HlpISE9Oek7vv73vv73vv70R77+9xpNyEhLvv73vv73vv73vv70877+9ee+/vXzvv73'+
                                'vv70737xT35lvAC9e77+9eO+/ve+/vcWLFy9e77+9eO+/ve+/vcWLFy9e77+9eO+/ve+/ve+/vUdc77+9DHQW77+9Skrvv73vv73vv73vv71'+
                                'CFVXJO+/vUJIPVLYpe+/vUgg77+9aDEeHGIyVV7vv71877+977+977+9KO+/ve+/vSor77+9CDkD77+977+9EgYA77+9Fu+/vSVwSCDvv70o' +
                                'nzvv70aGn3vv70iZe+/vUXvv70jDO+/vVbvv70/Qe+/vTPvv73vv712JiEF77+977+9Qu+/ve+/vRwc77+9VgghOzJ/be+/vVdt77+977+977+'+
                                '93J5S77+977+9D++/vVpP77+9GO+/vRrvv701Ohzvv73vv71q77+9A++/ve+/vUDvv73vv71C77+91oBaCO+/vUJ1JO+/vWBcYlBpSgEtMAxwA'+
                                'jvvv70l77+9Swjvv73vv70TXgcATWcl77+977+977+9KMufJe+/vQ3vv73Gtu+/vdOqVO+/vWnvv71YXO+/vVrvv70TH++/ve+/vXIh77+9UWv'+
                                'QqlQA77+9VQ7vv70LDu+/ve+/ve+/vV/vv73vv70CBgPvv71zPwnvv71077+977+977+977+9X10LWS7vv70677+9XDAf77+977+9EemphSDvv'+
                                '73vv73vv70QUGHvv73vv73Rou+/vTcMOu+/vTojVGdcB++/vQIvCSHvv73vv73vv73vv71ifjpbQUfvv71ZSk3vv73vv71gOXBXR++/vSnOtQ4p'+
                                '77+977+977+9RO+/vRIIBO+/vQTvv73vv71E1rnvv73vv73vv70a77+9Vu+/vRDvv706Smfvv73vv73vv70YSjoCKe+/vUgvK1jvv71gxoXvv71'+
                                'jUGvvv70z77+9eyRb5bChVe+/vQlQawt8de+/vTlq77+9Eu+/vXbvv73vv70qIcSSC++/vUtT77+9asaQ77+977+9BU9e77+9MQDsiosy77+9xa'+
                                'Pvv71Y77+9cu+/vRIC77+977+9EWXvv71U77+977+9IjDvv71DIO+/ve+/ve+/vRfvv73vv73vv73vv71V77+977+9Hea8q++/ve+/vQcubRcr77'+
                                '+9EDcm77+977+977+977+9TCXvv73vv71B77+9cnPvv73vv71H77+9H++/vXXvv73vv70CIt+laO+/ve+/vQgL77+977+9LA0t77+9ZC8LVO+/ve' +
                                '+/vTlcFu+/vQDvv73vv71q77+9fO+/vTM1XO+/vS1kc++/ve+/vSDvv73vv70/LSHvv71i77+9Pe+/vXcfO++/vX/vv73vv73vv70ZKO+/vSQ+77' +
                                '+9N8OmTe+/ve+/vVUpAHXCqe+/vRwRUe+/vRnvv70v77+9QV0vDe+/vSTvv70aY8en77+977+977+977+9Kh54ZDZDXn0J77+9Uu+/ve+/vXMP77'+
                                '+9Nu+/vcKsLO+/ve+/ve+/vR4f77+9de+/ve+/vXpXTe+/vXPvv70ZZNKVV++/vVhs77+9BO+/vVpG77+92rXvv73RoO+/vQjvv70iIlBr25/vv'+
                                '73KomLvv71uSyPvv73vv70h77+977+9C++/ve+/ve+/ve+/vRMU77+9f1gkXe+/vUzvv71XcjI+Qe+/ve+/vT1077+9PV/vv73vv73Npe+/vRMc'+
                                'Ymrvv73vv708ZiTvv70GD++/ve+/ve+/vTNJGDQQU1Tvv73vv703JA0o77+9ajTvv70O77+977+977+9VFjvv73vv73vv73vv73vv70d77+977'+
                                '+977+977+977+977+9bi7vv71C77+9RMqeDu+/ve+/vX/vv71H77+9ex7ZuiXvv70s77+9bO+/ve+/vTTvv71N77+9enokD++/vXHvv73vv719'+
                                'VQpCeO+/ve+/ve+/ve+/ve+/vWx6dyHHtu+/ve+/ve+/vQh6Jijvv70FO++/vTFK77+9a1UU77+9ajl177+9fiHvv71077+9eBwWC1cNHe+/'+
                                'vU1377+977+9ZHrfrV7vv73vv73vv71/H++/ve+/vcqIa0Y5Yu+/vSRo77+977+977+977+9b17vv71OUVzvv71v77+9Z++/vXrvv73vv71y'+
                                'UQ1ySB7vv71V77+9B++/vUTvv70w77+9F++/ve+/ve+/ve+/ve+/vX97HhUFJe+/ve+/ve+/vWJoPysJMQpB77+9Ci5FUFHvv70iK1vNrkw/'+
                                'D77+9ciHvv71vb++/ve+/ve+/vRxieu+/vW5R77+977+977+977+977+977+977+9e++/ve+/vUhu77+977+977+977+9AxwYDe+/vU7cimoV'+
                                '77+977+9aFnvv73vv73vv73vv70Cd++/vX7vv707Zu+/ve+/vWTvv71lxaU8N++/vVHvv71777+9Ze+/vWJjGsKL77+9Cu+/vXPvv73Muu'+
                                '+/vcqKO++/vR8677+977+9BRTvv73vv70zSO+/ve+/ve+/vQYJbyBlDwApJe+/ve+/ve+/ve+/ve+/vUvvv70yMO+/ve+/vV0377+9ER/vv70C77'+
                                '+92Kwi77+9Ae+/vU7vv73vv73biu+/vV99QR4477+9Ye+/vSpf77+9THrvv70JBlzvv73vv73vv71S77+977+977+9X2Xft2vvv71l77+977'+
                                '+926/vv73vv70577+977+977+9M3xZ77+9MxLvv73vv70X77+977+9cNu1Z++/ve+/ve+/vQ7vv73vv70qWO+/vcyHHe+/ve+/ve+/vXzvv73vv71M77'+
                                '+977+9bWvvv71tGzbvv73vv70Lcw9877+977+9c0Dvv70L77+977+977+977+9Si8rC3jvv71HPu+/ve+/vRfvv73vv73vv71577+977+977'+
                                '+9SVvvv73vv707b++/vWPvv73vv706Au+/ve+/vQt977+977+9AO+/ve+/vd6ffu+/vR9G77+9S2Xvv73vv718YkPvv70ICXIREe+/vTB677'+
                                '+977+977+9Mu+/ve+/vU/vv70I77+977+9Ju+/vXvvv71G77+977+9fO+/ve+/ve+/ve+/vVYwe0YdN++/ve+/vXHvv71PSGbvv73vv73vv70'+
                                'nUnlu77+9Qibvv70+77+9YWNuYO+/ve+/ve+/ve+/vSnvv73vv71X77+977+977+977+977+9Du+/vS7vv71k77+9fhLvv711Je+/'+
                                'vXtX77+977+9M++/vRTvv73vv70PFgUn77+9Kn7vv73vv71h2r3vv73SqQbvv71eWBguNO+/vQ1I77+977+9PHzvv73vv73vv71sXO'+
                                '/vR7vv71N77+9MGnvv73vv70h77+977+9Vu+/vXRDL++/ve+/ve+/vSLvv73vv73vv71F77+977+977+977+9XDPvv73vv73vv73vv73vv73vv70r77'+
                                '+977+9M++/ve+/vWEDHO+/vVbvv73vv73vv73vv71uegwb77+9f2goADnvv70H77+977+9b3Pvv71677+977+977+9R++/vX7vv73vv70l77'+
                                '+977+98oe/vu+/ve+/ve+/vR8Aeu+/ve+/ve+/ve+/ve+/vWzduO+/vSt677+9ACAE77+977+977+9JO+/vUTvv70X77+977'+
                                '+9GHvvv71mVzJiPvv73vv73vv73vv73vv73Zv++/ve+/ve+/ve+/vQBQaTTvv73vv73vv70T77+977+977+9CyJb77+9U++/vU/vv71MSEzvv73vv73vv70U77'+
                                '+977+9Pz9a77+9E9Ol77+9Be+/ve+/ve+/ve+/ve+/vQ8/77+977+9cmLvv71YCQ4xMe+/ve+/ve+/vdK377+9H++/vRsNDE4Z77+9EGbvv73vv71477+977'+
                                '+9Zynvv73vv70See+/ve+/vTbvv71ZfXIf77+977+977+9Q2Pvv70hfu+/vVPvv73vv70Ede+/ve+/vTnvv73vv71/M++/vTd3cu+/ve+/vXc377+977+977'+
                                '+977+977+9Mznvv73vv73vv73vv73vv73vv71e77+9X0rvv73vv73vv73EpO+/vSDvv70+77+9PA/vv73vv71hQ++/vTzvv73vv73vv73vv70mJe+/vW8XV+'+
                                '+/ve+/vTl1LO+/vV1b0pjvv73vv707Ce+/ve+/ve+/vVJn77+977+977+977+977+977+9VitJ77+977+977+9OkHvv71ePe+/ve+/vWtrau+/vW/vv70077'+
                                '+9bnvvv719bhfvv73vv715cS3vv71nOO+/vWIu77+9MWHMnO+/vToaXcuDeRvvv702JSTvv73Fge+/vV1d1rbvv73vv71777+977+977+9BDZl77+977'+
                                '+936zvv73vv73vv73vv73vv73vv70Hct2t77+9Ggxg77+9Me+/ve+/ve+/ve+/vUJT77+9AO+/ve+/ve+/vWPvv71k77+977+977+9Pu+/ve+/ve+/'+
                                'vRhOSxXvv70/77+977+9eO+/vSrCu3Rh77+9Ky9177+9MUDvv73vv73vv73vv73vv73vv70gakXvv70V77+9Je+/vc2PUV5q77+9XFLvv71t77+9de'+
                                '+/vXVWHu+/vdC9C1s2f0p177+977+9dsWXLgfvv70aM3Xvv70577+977+9au+/vW/vv73vv70xM++/vWlqb++/ve+/vRAqfmhN77+977+977+977+977'+
                                '+977+977+977+9VHh1ZRVjJk5oZ++/ve+/ve+/vVxa77+9Vu+/vSLvv73vv73eru+/vRrvv70O77+93onvv73vv73vv71M77+9Ee+/ve+/vQR177+977'+
                                '+9EWct77+977+977+9Ohrvv71lEFtd77+97oKzBe+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vd2777+9J++/vQtCUVxs77+977+9PTc977+9GAlJA1vvv71w77'+
                                '+977+977+9MUI4WxNq77+977+977+977+977+9bCtC77+9de+/ve+/ve+/vVotHu+/ve+/vXcK77+977+9Le+/vWAyXe+/vcaQ77+977+9TVHvv717Iu+/ve'+
                                '/vW8M77+9Cgrvv73vv73vv73vv70lbljvv71N77+90LAwXe+/vSkI77+977+977+977+9dlvvv71a77+9HDt477+977+9c1/vv73vv70jTH3vv70F77+977'+
                                '+9Nu+/vTsvGhJOaVzaie+/vX5+Ht2xde+/vTc577+977+977+977+977+9IO+/ve+/ve+/vVZbf++/ve+/ve+/ve+/vWnvv71B77+977+977+9c++/vT9F77'+
                                '+977+9Uynvv73vv73vv73vv70x77+977+9QERCAu+/vdeMYe+/ve+/vTt2JtSBCDgm1Krvv70HRe+/vW5D77+977+9J++/vSzvv70fAtG677+977+9PwcF77'+
                                '+9UCsMf2rvv73vv73vv70X77+9IO+/vUpK77+977+9Ku+/vVHvv73vv70XQ1/vv70iOSlU77+9KxVGIxjvv70kCe+/vQHvv70DeVoI77+977+977+9H+'+
                                '+/vQjvv73vv73vv73vv73vv73PuWjvv73PpO+/ve+/ve+/vSoEKy7vv73vv71O77+9KlUyNTU477+907YtL9qd77+977+977+977+9XwLvv71dLH3vv70g77'+
                                '+9A++/vVDvv70UD3Xvv70x77+9Il/vv71pNUU9CXTvv70177+9Te+/vVrvv70pahDvv73vv71p77+9IQ3vv71NSO+/vU0N77+9WtSxWXPvv70aZO+/vRBOa'+
                                '++/vW3vv73vv711F0Xvv70Uc++/vU1RfxJCyJTvv73vv70XQO+/vQHvv73vv70a77+9ESJTQe+/vUwO77+9Xu+/vSl577+977+977+977+977+977'+
                                '+9fCvvv73vv73Nvm/vv71BF++/vSHvv71JFXNSTe+/vW5777+9ae+/ve+/vSbvv71U77+977+977+9ZlPvv71dUu+/vXdsIe+/vUs9WWF3FO+'+
                                '/vXTvv71NK8ubKRDvv73vv73vv73PqduG77+9RO+/ve+/ve+/ve+/vUXvv73Yku+/ve+/vVLvv73vv71cNEwKOQhkLO+/vVBLZO+/ve+/vWMu77+'+
                                '9TB8RFu+/ve+/vXF577+9Sz7vv73vv71W77+9E++/vVFrXu+/ve+/vRlc77+977+9REUSXtGZ77+977+9HiJE77+9HMe/BFxy77+977+9J++/vTjvv70nau+'+
                                '/vWxZ77+9X1Hvv71/77+977+9PO+/ve+/ve+/vT3vv71d77+977+977+977+977+977+977+977+977+977+977+9Me+/vXnvv71L77+977+9K++/vU9GEe+'+
                                '/vRFyABDvv71Q77+9SilVAmwg77+9MksI77+9WwUb77+977+977+977+9Xu+/vTx777+977+9xYsXL17vv71477+977+9xYsXL17vv71477+977+9xYsXL14ua+'+
                                '/vQ/vv70AQu+/ve+/ve+/ve+/vQAAAABJRU5E77+9QmDvv70=', 'base64'); 
 
routes.get("/favicon.ico", function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Length', favicon.length);
    res.setHeader('Content-Type', 'image/x-icon');
    res.setHeader("Cache-Control", "public, max-age=2592000");                // expiers after a month
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
    res.end(favicon);
   });

//redireciona para https
//routes.get("*", function(request, response, next){
//    response.redirect("https://" + request.headers.host + request.url);  
//});

routes.get('/', (req,res,next) => {
    return res.json({hello: 'world'});
})

routes.get('/filmes', (req,res,next) => {
    return res.json({download: 'de filmes'});
})

module.exports = routes;