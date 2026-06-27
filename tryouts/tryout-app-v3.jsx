import { useState, useEffect, useMemo, useRef, useCallback } from "react";

const RAW_ATHLETES = [{"to":"","first":"Bristol","last":"Ardissono","dob":"12/23/2013","division":"12 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"615-359-8436","email":"slardissono@gmail.com"},{"to":"","first":"Emmalee","last":"Bringhurst","dob":"7/15/2013","division":"12 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6158126284","email":"robincluck@hotmail.com"},{"to":"","first":"Leeone","last":"Haley","dob":"2/16/2014","division":"12 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"2707790450","email":"lhaley820@hotmail.com"},{"to":"1","first":"Hensley","last":"Hampton","dob":"","division":"12 & Under","primaryPos":"","altPos":"","phone":"","email":""},{"to":"2","first":"Sophia","last":"Ison","dob":"10/22/2013","division":"12 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"6159007764","email":"boandsarah@mac.com"},{"to":"4","first":"Ella","last":"LaChappelle","dob":"10/29/2013","division":"12 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"810-869-3540","email":"slachappelle@gmail.com"},{"to":"4","first":"Jennifer","last":"MacDonald","dob":"1/14/2014","division":"12 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"5086410435","email":"jennyvizueta@hotmail.com"},{"to":"","first":"Ellie","last":"Parker","dob":"9/4/2013","division":"12 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"615-427-1587","email":"parker22db@gmail.com"},{"to":"","first":"Annabelle","last":"Acosta","dob":"1/9/2014","division":"12 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"4352380331","email":"samantha_acosta1@yahoo.com"},{"to":"","first":"Elise","last":"Bradley","dob":"5/19/2015","division":"12 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"6154058800","email":"jbradley0984@gmail.com"},{"to":"","first":"Kennedy","last":"Hale","dob":"9/6/2013","division":"12 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"419-575-1735","email":"nickihale@yahoo.com"},{"to":"","first":"Whitley","last":"Latimer","dob":"1/9/2014","division":"12 & Under","primaryPos":"I am unsure of my position","altPos":"Defensive Specialist","phone":"6158094688","email":"hdplatimer@gmail.com"},{"to":"","first":"Raven","last":"Rose","dob":"9/19/2013","division":"12 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"615-605-4112","email":"rachelmorbitzer@hotmail.com"},{"to":"","first":"Rose","last":"Schwalm","dob":"10/27/2013","division":"12 & Under","primaryPos":"N/A","altPos":"N/A","phone":"3199368656","email":"dr.megan.schwalm@gmail.com"},{"to":"","first":"Tah\u2019Riya","last":"Frazier","dob":"4/18/2014","division":"12 & Under","primaryPos":"N/A","altPos":"N/A","phone":"615-839-1644","email":"wandradashele@gmail.com"},{"to":"","first":"Aria","last":"Gary","dob":"4/8/2015","division":"12 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"478-283-8871","email":"daviserin4@gmail.com"},{"to":"","first":"Mallory","last":"Kerperien","dob":"7/9/2014","division":"12 & Under","primaryPos":"N/A","altPos":"N/A","phone":"6159712340","email":"amanda.strohacker@gmail.com"},{"to":"","first":"Emorie","last":"McCorkle","dob":"1/31/2014","division":"12 & Under","primaryPos":"Right Side Hitter","altPos":"Defensive Specialist","phone":"615-336-0505","email":"slocke1115@hotmail.com"},{"to":"","first":"Ayla","last":"OBannon","dob":"9/12/2013","division":"12 & Under","primaryPos":"Outside Hitter","altPos":"Setter","phone":"6152679021","email":"christopherobannon36@gmail.com"},{"to":"","first":"Madalyn","last":"Smith","dob":"4/17/2014","division":"12 & Under","primaryPos":"N/A","altPos":"N/A","phone":"9317350057","email":"hjj2958@yahoo.com"},{"to":"","first":"Reya","last":"Walters","dob":"5/20/2014","division":"12 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"8636401585","email":"rebecca.s.walters@gmail.com"},{"to":"","first":"Birdie","last":"Shelton","dob":"10/20/2014","division":"12 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"6159433028","email":"hshelton82@yahoo.com"},{"to":"","first":"Paisley","last":"Adams","dob":"9/10/2012","division":"13 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6144021180","email":"ilovetojump@gmail.com"},{"to":"","first":"Emma-Rae","last":"Epps","dob":"8/16/2012","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"6155461308","email":"erin.bengough@gmail.com"},{"to":"","first":"McKenzie","last":"Greer","dob":"9/18/2012","division":"13 & Under","primaryPos":"Setter","altPos":"Middle Hitter","phone":"6157853020","email":"dearia.johns@yahoo.com"},{"to":"","first":"Madelynn","last":"LaFave","dob":"9/5/2012","division":"13 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"615-944-3999","email":"andrealafave@gmail.com"},{"to":"","first":"Britta","last":"Lamb","dob":"7/1/2012","division":"13 & Under","primaryPos":"Setter","altPos":"Outside Hitter","phone":"6154733098","email":"katiellamb5@gmail.com"},{"to":"","first":"Olivia","last":"Lee","dob":"12/3/2012","division":"13 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"303-875-0992","email":"jennyshin1215@gmail.com"},{"to":"","first":"Peyton","last":"Lynch","dob":"12/31/2012","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"615-887-6370","email":"kerr20@icloud.com"},{"to":"","first":"Kiley","last":"Reynolds","dob":"7/18/2012","division":"13 & Under","primaryPos":"Right Side Hitter","altPos":"Setter","phone":"770-900-6350","email":"cassandra.f.reynolds@vumc.org"},{"to":"","first":"Chloe","last":"Segroves","dob":"9/26/2012","division":"13 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"6154988076","email":"kristalyn3k@gmail.com"},{"to":"","first":"Caroline","last":"Bowman","dob":"7/11/2013","division":"13 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"615-424-6414","email":"willbowman87@yahoo.com"},{"to":"","first":"Bria","last":"Crabtree","dob":"7/1/2012","division":"13 & Under","primaryPos":"Middle Hitter","altPos":"Defensive Specialist","phone":"3609200626","email":"madeleinecrabtree@gmail.com"},{"to":"","first":"Elizabeth","last":"Elders","dob":"7/20/2012","division":"13 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"9314785904","email":"ty.elders@gmail.com"},{"to":"","first":"Sydney","last":"Farneth","dob":"5/30/2013","division":"13 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"3129611983","email":"shanafarneth@gmail.com"},{"to":"","first":"Laiklyn","last":"Ferguson","dob":"6/17/2013","division":"13 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"615-417-3112","email":"meagan.ferguson22@gmail.com"},{"to":"","first":"Norah","last":"Jeffries","dob":"6/9/2013","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"615-796-3142","email":"bjeffries26@yahoo.com"},{"to":"","first":"Emmelynn","last":"McCarty","dob":"1/1/2013","division":"13 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"224-430-7284","email":"katie.mccarty91@gmail.com"},{"to":"","first":"Avery","last":"Morgenson","dob":"7/3/2012","division":"13 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"6152680278","email":"jmorgenson703@gmail.com"},{"to":"","first":"Madeline","last":"Neese","dob":"9/24/2012","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"9548185746","email":"bneese55@gmail.com"},{"to":"","first":"Mary Josephine","last":"Opie","dob":"11/14/2012","division":"13 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"229-669-1749","email":"opie.runner@yahoo.com"},{"to":"","first":"Evelyn","last":"Brown","dob":"5/13/2013","division":"13 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"615-927-5691","email":"sdampierphillips@gmail.com"},{"to":"","first":"Kierstin","last":"DeBerry","dob":"8/13/2012","division":"13 & Under","primaryPos":"Setter","altPos":"N/A","phone":"731-394-3822","email":"sequoyagreer@yahoo.com"},{"to":"","first":"Ivy","last":"Deckert","dob":"8/29/2012","division":"13 & Under","primaryPos":"Setter","altPos":"N/A","phone":"2182513729","email":"derek.deckert@gmail.com"},{"to":"","first":"McKenna","last":"Floyd","dob":"3/28/2013","division":"13 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"6157851208","email":"floyd.cathy24@gmail.com"},{"to":"","first":"Addison","last":"James","dob":"7/12/2012","division":"13 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"615-975-0378","email":"reviewrn@comcast.net"},{"to":"","first":"Cadence","last":"McCarty","dob":"3/13/2013","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"7164748331","email":"ianmccarty@hotmail.com"},{"to":"","first":"Riley","last":"Morgan","dob":"3/26/2013","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"6155941885","email":"brittneystewart1@gmail.com"},{"to":"","first":"Kara","last":"Schweighardt","dob":"9/14/2012","division":"13 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"615-712-3928","email":"tms226@comcast.net"},{"to":"","first":"Berklee","last":"Steward","dob":"10/25/2012","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"615-542-3810","email":"astrawn1684@gmail.com"},{"to":"","first":"Kate","last":"Frost","dob":"4/12/2013","division":"13 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"6156240845","email":"jillgorinfrost@gmail.com"},{"to":"","first":"Mackenzie","last":"Jones","dob":"10/4/2012","division":"13 & Under","primaryPos":"Middle Hitter","altPos":"N/A","phone":"615-500-2896","email":"jonesdetail2@yahoo.com"},{"to":"","first":"Southern","last":"Lemacks","dob":"10/26/2012","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"Middle Hitter","phone":"2293953064","email":"jacques2364@gmail.com"},{"to":"","first":"Alyssa","last":"O'Leary","dob":"12/10/2012","division":"13 & Under","primaryPos":"Right Side Hitter","altPos":"Defensive Specialist","phone":"216-496-2778","email":"soleary0618@gmail.com"},{"to":"","first":"Emelia","last":"Rhodes","dob":"8/24/2012","division":"13 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"2567092743","email":"amberrhodes09@gmail.com"},{"to":"","first":"Norah","last":"Shelton","dob":"12/4/2012","division":"13 & Under","primaryPos":"Setter","altPos":"Middle Hitter","phone":"6159736702","email":"eshelton8422@att.net"},{"to":"","first":"Emery","last":"Vogel","dob":"5/22/2013","division":"13 & Under","primaryPos":"Outside Hitter","altPos":"N/A","phone":"615-336-7328","email":"amyvogel08@gmail.com"},{"to":"","first":"Violet","last":"Quick","dob":"12/17/2012","division":"13 & Under","primaryPos":"N/A","altPos":"N/A","phone":"7745410573","email":"jenniferquicka@gmail.com"},{"to":"","first":"Leah","last":"Wilson","dob":"9/12/2012","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6154175616","email":"scottandbecca.wilson@gmail.com"},{"to":"","first":"Addisyn","last":"Hawkes","dob":"3/1/2013","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"6155170486","email":"crystalhawkes1@gmail.com"},{"to":"","first":"Scarlett","last":"Maurer","dob":"","division":"13 & Under","primaryPos":"Outside","altPos":"DS","phone":"","email":""},{"to":"","first":"Scarlett","last":"Maurer","dob":"7/7/2012","division":"13 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6158873621","email":"katiemaurer6@gmail.com"},{"to":"","first":"Eva","last":"Sadler","dob":"7/30/2013","division":"13 & Under","primaryPos":"Defensive Specialist","altPos":"Right Side Hitter","phone":"6152381597","email":"spencer.sadler@gmail.com"},{"to":"","first":"Nila","last":"Dunn","dob":"10/30/2012","division":"13 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"6155452260","email":"jamie3dunn@gmail.com"},{"to":"","first":"Ella","last":"Akpan","dob":"3/4/2013","division":"13 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"6158184979","email":"djnr4@yahoo.com"},{"to":"","first":"Layla","last":"Angrin","dob":"3/5/2013","division":"13 & Under","primaryPos":"Middle Hitter","altPos":"N/A","phone":"6297298880","email":"mcangrin@gmail.com"},{"to":"","first":"Karmela","last":"Mahone","dob":"4/10/2013","division":"13 & Under","primaryPos":"N/A","altPos":"N/A","phone":"8623997808","email":"lwilkerson1007@gmail.com"},{"to":"","first":"Celia","last":"McFarland","dob":"8/31/2012","division":"13 & Under","primaryPos":"N/A","altPos":"Defensive Specialist","phone":"5853174701","email":"kevinmcfarland@gpj.com"},{"to":"","first":"Aubree","last":"Morales","dob":"8/13/2012","division":"13 & Under","primaryPos":"N/A","altPos":"N/A","phone":"7135406832","email":"brittanyswann061@gmail.com"},{"to":"","first":"Brielle","last":"Rees","dob":"6/11/2013","division":"13 & Under","primaryPos":"N/A","altPos":"N/A","phone":"435-272-6020","email":"katy_rees@yahoo.com"},{"to":"","first":"Krimsyn","last":"Settles","dob":"10/20/2012","division":"13 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"615-997-8257","email":"brittkbs122010@gmail.com"},{"to":"","first":"Lynden","last":"Borendame","dob":"12/22/2011","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6152953607","email":"g.borendame@gmail.com"},{"to":"","first":"Anistyn","last":"Craig","dob":"4/19/2012","division":"14 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"931-267-6482","email":"cdscraig@yahoo.com"},{"to":"","first":"Mya","last":"Dryden","dob":"3/13/2012","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"9012333339","email":"melissa.m.dryden@gmail.com"},{"to":"","first":"Kaidyn","last":"Goins","dob":"2/9/2012","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"615-969-6522","email":"tag92509@gmail.com"},{"to":"","first":"Carrington","last":"JACKSON","dob":"8/30/2011","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"615-430-7369","email":"ncjackson@comcast.net"},{"to":"","first":"Megan","last":"Loyacano","dob":"9/17/2011","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"6154815757","email":"marieloyacano@yahoo.com"},{"to":"","first":"Kimber","last":"Potts","dob":"8/9/2011","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"615-400-9833","email":"holley.potts@gmail.com"},{"to":"","first":"KINSLEY","last":"Richard","dob":"9/16/2011","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"6154816632","email":"1melissarichard@gmail.com"},{"to":"","first":"Avalea","last":"Shane","dob":"6/24/2012","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6154381366","email":"deleahshane@gmail.com"},{"to":"","first":"McKenzie","last":"Young","dob":"10/3/2012","division":"14 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"7706809476","email":"kimberlyrae.young@outlook.com"},{"to":"","first":"Khloe","last":"Edgell","dob":"4/3/2012","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"6154232824","email":"deanac01@gmail.com"},{"to":"","first":"Kaylen","last":"Hale","dob":"10/16/2011","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"419-575-1735","email":"nickihale@yahoo.com"},{"to":"","first":"Mila","last":"Haliburton","dob":"7/21/2011","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"615-554-0836","email":"melodyhaliburton@yahoo.com"},{"to":"","first":"Lillian","last":"Laupp","dob":"11/7/2011","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"6156170276","email":"klaupp89@gmail.com"},{"to":"","first":"Krislyn","last":"Payton","dob":"9/2/2011","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"615-648-3225","email":"sgpayton3@aol.com"},{"to":"","first":"Chloe","last":"Ragsdale","dob":"9/17/2011","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"4074749601","email":"mikerags87@gmail.com"},{"to":"","first":"Hailey","last":"Sica","dob":"8/8/2011","division":"14 & Under","primaryPos":"Right Side Hitter","altPos":"Outside Hitter","phone":"6159710449","email":"soldwithsica@gmail.com"},{"to":"","first":"Ella","last":"Spencer","dob":"4/2/2012","division":"14 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"615-636-7749","email":"meg856@gmail.com"},{"to":"","first":"Brianna","last":"Bagwell","dob":"8/25/2011","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"615-979-3790","email":"roxbagwell@gmail.com"},{"to":"","first":"Serinity","last":"Brown","dob":"7/27/2011","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"6155226281","email":"myrab2000@hotmail.com"},{"to":"","first":"Abigail","last":"Burnett","dob":"6/20/2012","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"8505027883","email":"saraburnett3@gmail.com"},{"to":"","first":"Darby","last":"Douglass","dob":"3/2/2012","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"8592302305","email":"lesley4678@gmail.com"},{"to":"","first":"Emily Ann","last":"Harvieux","dob":"4/2/2012","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"615-498-5581","email":"nashvegas22@hotmail.com"},{"to":"","first":"Ruth Ann","last":"Jones","dob":"5/22/2012","division":"14 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"9312476422","email":"haj2299@gmail.com"},{"to":"","first":"Lyla","last":"Lumpkin","dob":"7/11/2012","division":"14 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"2146739353","email":"ncl1105@gmail.com"},{"to":"","first":"Mattie","last":"Mason","dob":"1/30/2012","division":"14 & Under","primaryPos":"Setter","altPos":"Outside Hitter","phone":"615-971-9926","email":"salaav3@gmail.com"},{"to":"","first":"Tula","last":"Wagner","dob":"1/15/2012","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"5154416634","email":"feliciawagner4@gmail.com"},{"to":"","first":"Brelynn","last":"Wallace","dob":"7/21/2011","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6155008368","email":"casey.c.wallace@vumc.org"},{"to":"","first":"Savannah","last":"Maccaron","dob":"9/7/2011","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"631-939-1194","email":"jaymacc20@yahoo.com"},{"to":"","first":"Kaylie","last":"Cravens","dob":"8/2/2011","division":"14 & Under","primaryPos":"N/A","altPos":"N/A","phone":"6154063050","email":"brandicravens@gmail.com"},{"to":"","first":"ADELYN","last":"FLORES","dob":"1/5/2012","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"615-603-6790","email":"kellyd86@hotmail.com"},{"to":"","first":"Kalleah","last":"Hall","dob":"6/7/2012","division":"14 & Under","primaryPos":"Setter","altPos":"Outside Hitter","phone":"6154792651","email":"nikkihall0709@gmail.com"},{"to":"","first":"Addison","last":"Mcclain","dob":"11/4/2011","division":"14 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"615-556-4370","email":"rebekah.cobb@gmail.com"},{"to":"","first":"Albany","last":"Murphy","dob":"4/9/2013","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"931-652-8618","email":"the1danielle89@gmail.com"},{"to":"","first":"Aubrielle","last":"Murphy","dob":"10/13/2011","division":"14 & Under","primaryPos":"Right Side Hitter","altPos":"Defensive Specialist","phone":"931-652-8618","email":"the1danielle89@gmail.com"},{"to":"","first":"Yanet","last":"Nwogbo","dob":"12/20/2011","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"6785387626","email":"chucknobo1@gmail.com"},{"to":"","first":"Annslee","last":"Oates","dob":"11/1/2011","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Setter","phone":"615-624-1592","email":"barbaragarrett15@gmail.com"},{"to":"","first":"Adelyn","last":"Pangborn","dob":"6/12/2012","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"4144054403","email":"jess.pangborn@gmail.com"},{"to":"","first":"Zurianna","last":"Pointer","dob":"2/8/2011","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"6296295334","email":"aleeshabing@gmail.com"},{"to":"","first":"Julianna","last":"Daley","dob":"6/5/2012","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Defensive Specialist","phone":"859-240-4843","email":"kldetelich@aol.com"},{"to":"","first":"Allisa","last":"Haggenmacher","dob":"12/2/2011","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"615-631-3535","email":"ally256@comcast.net"},{"to":"","first":"Madison","last":"Morrison","dob":"3/23/2012","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"615-210-6654","email":"joshua.morrison1391@yahoo.com"},{"to":"","first":"Ada Lynn","last":"Trotter/ Thomas?","dob":"12/2/2011","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"6155458142","email":"denton01@gmail.com"},{"to":"","first":"Sophia","last":"Yanulaytis-Sola","dob":"6/27/2012","division":"14 & Under","primaryPos":"N/A","altPos":"Defensive Specialist","phone":"7143813284","email":"wanulayt@aol.com"},{"to":"","first":"Anaija","last":"Rawls","dob":"8/6/2012","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"614-778-5887","email":"tiffrawls21@gmail.com"},{"to":"","first":"Baylor","last":"Davidson","dob":"","division":"14 & Under","primaryPos":"Setter","altPos":"Outside","phone":"","email":""},{"to":"","first":"Baylor","last":"Davidson","dob":"11/8/2011","division":"14 & Under","primaryPos":"Setter","altPos":"Outside Hitter","phone":"9312655105","email":"tiffsdavidson@gmail.com"},{"to":"","first":"Haven","last":"Fisher","dob":"5/27/2012","division":"14 & Under","primaryPos":"Middle Hitter","altPos":"Defensive Specialist","phone":"6153067226","email":"meierkrs@yahoo.com"},{"to":"","first":"Isabelle","last":"Gomez","dob":"5/19/2012","division":"14 & Under","primaryPos":"Right Side Hitter","altPos":"Outside Hitter","phone":"6157963919","email":"anthonyg.gomez@gmail.com"},{"to":"","first":"Peyton","last":"Jenkins","dob":"10/17/2011","division":"14 & Under","primaryPos":"N/A","altPos":"N/A","phone":"6155003508","email":"bmvaughn20@hotmail.com"},{"to":"","first":"Addison","last":"Jones","dob":"12/16/2011","division":"14 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"9312612209","email":"ejones1@pcsstn.com"},{"to":"","first":"Lola","last":"Krauss","dob":"9/18/2012","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"9315101669","email":"loriekrauss@gmail.com"},{"to":"","first":"Eva","last":"Pahanish","dob":"10/28/2011","division":"14 & Under","primaryPos":"Right Side Hitter","altPos":"Outside Hitter","phone":"6155853235","email":"kpanfish@gmail.com"},{"to":"","first":"Mavin","last":"Scott","dob":"10/5/2011","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"615-920-1201","email":"michaelscottthecoach@gmail.com"},{"to":"","first":"Violet","last":"Summers","dob":"4/26/2012","division":"14 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"661-904-2066","email":"jensummers08@gmail.com"},{"to":"","first":"Callie","last":"Ancalade","dob":"11/22/2011","division":"14 & Under","primaryPos":"N/A","altPos":"Defensive Specialist","phone":"9857189932","email":"hroseburrough@gmail.com"},{"to":"","first":"Lilly","last":"Gambill","dob":"9/3/2011","division":"14 & Under","primaryPos":"N/A","altPos":"N/A","phone":"615-848-4209","email":"mgambill80@gmail.com"},{"to":"","first":"Sara","last":"Neusse","dob":"10/27/2011","division":"14 & Under","primaryPos":"N/A","altPos":"N/A","phone":"6157853203","email":"ash.neusse@gmail.com"},{"to":"","first":"maria","last":"Ochoa","dob":"9/7/2011","division":"14 & Under","primaryPos":"Right Side Hitter","altPos":"Middle Hitter","phone":"7866008848","email":"dagnnyrodriguez2007@hotmail.com"},{"to":"","first":"Michelle","last":"Samaniego","dob":"7/8/2011","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"6292013869","email":"ofeliamartinez0707@gmail.com"},{"to":"","first":"Kiyah","last":"Sowa","dob":"7/26/2011","division":"14 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"615-779-0091","email":"tavastar92@gmail.com"},{"to":"","first":"Emerson","last":"Stallings","dob":"5/11/2012","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Right Side Hitter","phone":"8053008316","email":"dr.clynnjohnson@gmail.com"},{"to":"","first":"Audrey","last":"Swanick","dob":"7/10/2011","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"407-668-0240","email":"mswanick@ymail.com"},{"to":"","first":"Margaret","last":"Tywater","dob":"11/7/2011","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6154787441","email":"tywaterl@gmail.com"},{"to":"","first":"Emily","last":"Wilson","dob":"3/20/2012","division":"14 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"6156913759","email":"christy8142@gmail.com"},{"to":"","first":"Emily","last":"Bauer","dob":"9/27/2010","division":"15 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"615-504-7727","email":"tina@walterhillutilities.com"},{"to":"","first":"Gabriella","last":"Casias","dob":"9/27/2010","division":"15 & Under","primaryPos":"Setter","altPos":"Setter","phone":"7194802268","email":"rachelnoellecasias@gmail.com"},{"to":"","first":"Berkeley","last":"Cernak","dob":"1/30/2011","division":"15 & Under","primaryPos":"Right Side Hitter","altPos":"Outside Hitter","phone":"6159482970","email":"allthenaks@gmail.com"},{"to":"","first":"Kali","last":"Gill Maechler","dob":"10/23/2010","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"6152385694","email":"gillje@rcschools.net"},{"to":"","first":"Ava","last":"Leslie","dob":"9/20/2010","division":"15 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"6154433594","email":"melaniewleslie@gmail.com"},{"to":"","first":"Brilynn","last":"Ludeman","dob":"4/28/2011","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"Right Side Hitter","phone":"9314583392","email":"james.ludeman@icloud.com"},{"to":"","first":"Theola","last":"McQuown","dob":"12/23/2010","division":"15 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"570-494-8949","email":"mcquownsabrina@gmail.com"},{"to":"","first":"Zoe","last":"Risner","dob":"4/19/2011","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6154262967","email":"drisnerii@gmail.com"},{"to":"","first":"Norah","last":"Scruggs","dob":"7/23/2011","division":"15 & Under","primaryPos":"Right Side Hitter","altPos":"Middle Hitter","phone":"6154999633","email":"amandascruggs78@gmail.com"},{"to":"","first":"Leah","last":"Slivensky","dob":"11/19/2010","division":"15 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"5173031901","email":"jrsly12@gmail.com"},{"to":"","first":"Alyssa","last":"Swaim","dob":"2/14/2011","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6156928016","email":"casieswaim@bellsouth.net"},{"to":"","first":"Ava","last":"Anderson","dob":"10/10/2010","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"9315807551","email":"chad351c@yahoo.com"},{"to":"","first":"Caroline","last":"Boyd","dob":"1/14/2011","division":"15 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"9312245507","email":"kboyd1982@gmail.com"},{"to":"","first":"Samantha","last":"Grant","dob":"8/2/2011","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"614-746-6986","email":"seagrant25@gmail.com"},{"to":"","first":"Rayann","last":"Hines","dob":"2/28/2011","division":"15 & Under","primaryPos":"Right Side Hitter","altPos":"Defensive Specialist","phone":"6153351374","email":"moriahal@yahoo.com"},{"to":"","first":"Ruthie","last":"Jerkins","dob":"12/13/2010","division":"15 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"6153967988","email":"threegirlcircus@gmail.com"},{"to":"","first":"Ashleigh","last":"Knowles","dob":"11/5/2010","division":"15 & Under","primaryPos":"Middle Hitter","altPos":"N/A","phone":"615-594-5448","email":"kstyrlund@hotmail.com"},{"to":"","first":"Alexandra","last":"Knowles","dob":"11/5/2010","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"N/A","phone":"615-594-5448","email":"kstyrlund@hotmail.com"},{"to":"","first":"Andrea","last":"Morales","dob":"6/15/2011","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"786 237 9029","email":"douglasmorales0869@gmail.com"},{"to":"","first":"Kinsley","last":"Moss","dob":"1/27/2012","division":"15 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"615-491-2147","email":"christy@sleequipment.com"},{"to":"","first":"OLIVIA","last":"TETER","dob":"6/6/2012","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"6154275813","email":"j.tetermsw@gmail.com"},{"to":"","first":"Sydney","last":"Bloom","dob":"5/17/2011","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"6155193776","email":"jessicabloom78@gmail.com"},{"to":"","first":"Sophia","last":"Bloom","dob":"5/17/2011","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"6155193776","email":"jessicabloom78@gmail.com"},{"to":"","first":"Emma","last":"Cartwright","dob":"11/28/2010","division":"15 & Under","primaryPos":"Middle Hitter","altPos":"Middle Hitter","phone":"6154785740","email":"jamiee.cartwright@gmail.com"},{"to":"","first":"Brylie","last":"Darby","dob":"1/30/2011","division":"15 & Under","primaryPos":"Setter","altPos":"N/A","phone":"6154789263","email":"snflwr2200@gmail.com"},{"to":"","first":"Maddisen / Maddy","last":"Greene","dob":"8/22/2010","division":"15 & Under","primaryPos":"Right Side Hitter","altPos":"Middle Hitter","phone":"925-382-5286","email":"kellytiller@yahoo.com"},{"to":"","first":"Monroe","last":"Hazelwood","dob":"6/8/2012","division":"15 & Under","primaryPos":"Setter","altPos":"Outside Hitter","phone":"6158104011","email":"mollyrocha87@gmail.com"},{"to":"","first":"Annabelle","last":"Keach","dob":"10/4/2010","division":"15 & Under","primaryPos":"Middle Hitter","altPos":"Defensive Specialist","phone":"6152896857","email":"elizabethkeach@yahoo.com"},{"to":"","first":"Julie","last":"Sengbouttarath","dob":"12/17/2010","division":"15 & Under","primaryPos":"Right Side Hitter","altPos":"Defensive Specialist","phone":"615-617-9816","email":"dragonlord615@yahoo.com"},{"to":"","first":"McKenzie","last":"Vincent","dob":"7/12/2010","division":"15 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"6155879170","email":"jessica.cannon24@gmail.com"},{"to":"","first":"Avery","last":"Harlan","dob":"1/6/2011","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"615-984-8467","email":"catrinaharlan@hotmail.com"},{"to":"","first":"Kaylee","last":"Lyford","dob":"7/31/2010","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"2703070687","email":"amberlyford@yahoo.com"},{"to":"","first":"Aria","last":"Matthias","dob":"2/9/2011","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"6155428895","email":"alisha1190@gmail.com"},{"to":"","first":"Nova","last":"Morris","dob":"1/1/2011","division":"15 & Under","primaryPos":"Right Side Hitter","altPos":"Outside Hitter","phone":"6183035755","email":"marian9r9r@gmail.com"},{"to":"","first":"Sophia","last":"Phillips","dob":"4/14/2011","division":"15 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"313-363-3986","email":"lnewland88@gmail.com"},{"to":"","first":"Georgia","last":"Quick","dob":"1/9/2011","division":"15 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"661-350-4183","email":"tricia.quick@gmail.com"},{"to":"","first":"Isabella","last":"Winter","dob":"11/26/2010","division":"15 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"61543979743","email":"rebecca.e.winter@gmail.com"},{"to":"","first":"Galaxie","last":"Clinton","dob":"9/19/2010","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6156172370","email":"starriedowd21@gmail.com"},{"to":"","first":"Abi Kate","last":"Garrett","dob":"1/27/2011","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"6155891440","email":"tomgarrett81@hotmail.com"},{"to":"","first":"Jamya","last":"Jennings","dob":"","division":"15 & Under","primaryPos":"Middle","altPos":"Outside","phone":"","email":""},{"to":"","first":"Kaylee","last":"Stafford","dob":"8/6/2010","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"9314922580","email":"samanthastafford302@gmail.com"},{"to":"","first":"Madison","last":"McCauley","dob":"12/30/2010","division":"15 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"615-438-6688","email":"mmmmomma1230515@gmail.com"},{"to":"","first":"Emilee","last":"Alvarez","dob":"","division":"15 & Under","primaryPos":"Setter","altPos":"Right Side","phone":"","email":""},{"to":"","first":"Raelynn","last":"Ashley","dob":"7/16/2010","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"615-456-7905","email":"deidre@volunteersheetmetal.com"},{"to":"","first":"Madyson","last":"Brewer","dob":"4/5/2011","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6155422245","email":"stephenson.tayler@gmail.com"},{"to":"","first":"Presley","last":"Glass","dob":"11/5/2010","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"4233426006","email":"l_caroline@live.com"},{"to":"","first":"Teagan","last":"Honeycutt","dob":"12/31/2010","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"7752876943","email":"fallon.honeycutt@gmail.com"},{"to":"","first":"Araceli","last":"Thomas","dob":"11/19/2010","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6152434571","email":"born2basngr@gmail.com"},{"to":"","first":"Emma","last":"Walker","dob":"11/12/2010","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"720-204-0396","email":"walkersincolorado@gmail.com"},{"to":"","first":"Lianna","last":"Burton","dob":"7/8/2010","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"5713302860","email":"mike.burton0110@gmail.com"},{"to":"","first":"Symone","last":"Benton","dob":"3/14/2011","division":"15 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"804-840-2651","email":"laverne.benton@yahoo.com"},{"to":"","first":"LillyBroox","last":"Carey","dob":"11/19/2010","division":"15 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"6155945054","email":"abbeyjcarey@gmail.com"},{"to":"","first":"Kamryn","last":"Comstock","dob":"9/30/2010","division":"15 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"559-393-9167","email":"ncomstock12@gmail.com"},{"to":"","first":"millana","last":"Holman","dob":"3/11/2011","division":"15 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"6159307147","email":"jessicamills00@yahoo.com"},{"to":"","first":"Lily","last":"King","dob":"5/10/2011","division":"15 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"7315140258","email":"ashleymarr@hotmail.com"},{"to":"","first":"Saory","last":"Matos","dob":"9/29/2010","division":"15 & Under","primaryPos":"Setter","altPos":"Outside Hitter","phone":"6159831099","email":"sr.alex29@gmail.com"},{"to":"","first":"Adige","last":"Mcgear","dob":"","division":"15 & Under","primaryPos":"Setter","altPos":"DS","phone":"","email":""},{"to":"","first":"Mya","last":"Miller","dob":"2/18/2011","division":"15 & Under","primaryPos":"I am unsure of my position","altPos":"Defensive Specialist","phone":"3057856330","email":"lincolnmedical01@gmail.com"},{"to":"","first":"Amaya","last":"Nguyen","dob":"12/3/2010","division":"15 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"6154822776","email":"ynguyen1127@gmail.com"},{"to":"","first":"Lexi","last":"Rodrigues","dob":"1/12/2011","division":"15 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"615-605-7837","email":"nbyrnes11211@gmail.com"},{"to":"","first":"Makayla","last":"Ardissono","dob":"8/28/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"615-359-8436","email":"slardissono@gmail.com"},{"to":"","first":"Harper","last":"Brown","dob":"11/30/2009","division":"16 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"8654065586","email":"alysonbrown5@gmail.com"},{"to":"","first":"Amiyah","last":"Cobb","dob":"1/23/2010","division":"16 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"270-315-8857","email":"sarahcobb57@gmail.com"},{"to":"","first":"Abigail","last":"Frantz","dob":"3/16/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"6156313243","email":"jnfourakre@gmail.com"},{"to":"","first":"Lily","last":"Frantz","dob":"12/17/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"6155661559","email":"lynne.frantz@hotmail.com"},{"to":"","first":"Ellie Kate","last":"Knox","dob":"7/22/2009","division":"16 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"6158044912","email":"knoxpartyof4@yahoo.com"},{"to":"","first":"Lucy","last":"Martin","dob":"4/20/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"352-875-1757","email":"ufjules42@gmail.com"},{"to":"","first":"Hanlie","last":"Mohammad","dob":"10/6/2009","division":"16 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"6154918768","email":"lesmi0571@gmail.com"},{"to":"","first":"Adalyn","last":"Nelson","dob":"10/9/2009","division":"16 & Under","primaryPos":"Right Side Hitter","altPos":"Setter","phone":"9315812156","email":"heather.nelson1122@gmail.com"},{"to":"","first":"Taylee","last":"Osburne","dob":"7/24/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"6153308900","email":"bdstbo2224@aol.com"},{"to":"","first":"Abby","last":"Zimmerman","dob":"8/31/2009","division":"16 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"615-809-8165","email":"cookj69@hotmail.com"},{"to":"","first":"Gabriella","last":"Baron","dob":"5/25/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"6156318695","email":"alicia5052@aol.com"},{"to":"","first":"Abigail","last":"Collins","dob":"9/1/2009","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"615-887-1864","email":"tiffanycollins26@gmail.com"},{"to":"","first":"Cami","last":"Ford","dob":"7/8/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6152184391","email":"courtney.ford@lssd.org"},{"to":"","first":"Carly","last":"Harvey","dob":"11/15/2009","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"615-337-7904","email":"julharvey034@gmail.com"},{"to":"","first":"Brooke","last":"Ison","dob":"5/20/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6159007764","email":"boandsarah@mac.com"},{"to":"","first":"Ella","last":"MacLean","dob":"12/5/2009","division":"16 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"270-564-9774","email":"elisereeves@hotmail.com"},{"to":"","first":"Sarah","last":"McCullough","dob":"8/31/2009","division":"16 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"6155459118","email":"kemccullough@comcast.net"},{"to":"","first":"Brooke","last":"Meeks","dob":"9/24/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"615-202-6079","email":"caseymeeks90@gmail.com"},{"to":"","first":"Kimora","last":"Baptiste","dob":"11/26/2009","division":"16 & Under","primaryPos":"Right Side Hitter","altPos":"Middle Hitter","phone":"6156689935","email":"natty1b@hotmail.com"},{"to":"","first":"Lucie","last":"Beasley","dob":"7/22/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6157858893","email":"beasleym.lhl@gmail.com"},{"to":"","first":"Aleigh","last":"Blesie","dob":"3/22/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"3522381701","email":"sdblesie@gmail.com"},{"to":"","first":"Emery","last":"Crouch","dob":"5/14/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"7065895512","email":"joshualcrouch@gmail.com"},{"to":"","first":"Charlotte","last":"Grandjean","dob":"5/29/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"3344444641","email":"pete@petegrandjean.com"},{"to":"","first":"Pressley","last":"Hines","dob":"4/15/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"6153949472","email":"brooke0801@gmail.com"},{"to":"","first":"Catalina","last":"Holt","dob":"1/13/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"615-578-7747","email":"brianholt40@yahoo.com"},{"to":"","first":"Nylah","last":"Logan","dob":"5/2/2010","division":"16 & Under","primaryPos":"Right Side Hitter","altPos":"Middle Hitter","phone":"6157889341","email":"michaelplogan@yahoo.com"},{"to":"","first":"Ava","last":"Pennone","dob":"9/9/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"954-609-6117","email":"jenglmr87@gmail.com"},{"to":"","first":"Mya","last":"Cornwell","dob":"5/13/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"6157856657","email":"savannahcornwell@yahoo.com"},{"to":"","first":"Lacey","last":"Dunn","dob":"2/25/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"6156638583","email":"btdunn01@gmail.com"},{"to":"","first":"Alyssa","last":"Killian","dob":"8/27/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"9312056704","email":"alyshia122900@gmail.com"},{"to":"","first":"Kaniya","last":"Kincherlow","dob":"7/14/2009","division":"16 & Under","primaryPos":"Right Side Hitter","altPos":"Setter","phone":"616-506-1633","email":"kaniya714@gmail.com"},{"to":"","first":"Emma","last":"Lewis","dob":"3/28/2010","division":"16 & Under","primaryPos":"Setter","altPos":"N/A","phone":"269-598-7855","email":"1979klewis@gmail.com"},{"to":"","first":"Ayleigha","last":"Mann","dob":"12/23/2009","division":"16 & Under","primaryPos":"Right Side Hitter","altPos":"Outside Hitter","phone":"6158919205","email":"rpowers1223@gmail.com"},{"to":"","first":"Ashley","last":"Phillips","dob":"6/29/2010","division":"16 & Under","primaryPos":"Right Side Hitter","altPos":"Outside Hitter","phone":"9517048368","email":"tp4faith@gmail.com"},{"to":"","first":"Reese","last":"Voss","dob":"4/13/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6155567804","email":"aprilnichole11@gmail.com"},{"to":"","first":"Kamee","last":"Johnson","dob":"11/10/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6154956942","email":"apuckett05@gmail.com"},{"to":"","first":"Victoria","last":"Fuenmayor","dob":"8/18/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"6156254732","email":"claudibell@gmail.com"},{"to":"","first":"Evelyn","last":"Claiborne","dob":"2/27/2010","division":"16 & Under","primaryPos":"Right Side Hitter","altPos":"Defensive Specialist","phone":"6154256317","email":"zbxena@aol.com"},{"to":"","first":"Gianna","last":"Faccadio","dob":"3/8/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"6159921771","email":"lindsey.petrosky@abm.com"},{"to":"","first":"Vanessa","last":"Jacques","dob":"7/7/2009","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"7744888127","email":"michelle.jacques@comcast.net"},{"to":"","first":"Allison","last":"Armstrong","dob":"11/17/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"615-504-8558","email":"jenniferyo@netzero.net"},{"to":"","first":"Bella","last":"Brown","dob":"7/1/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"6154734419","email":"cheatwood_tammy@yahoo.com"},{"to":"","first":"Jordyn","last":"Hayes","dob":"9/20/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"615-796-4373","email":"jhayes_82@hotmail.com"},{"to":"","first":"Abby","last":"Marshall","dob":"9/12/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"6155948299","email":"jennifermooremarshall@gmail.com"},{"to":"","first":"Kinley","last":"Northcutt","dob":"6/3/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"6154834010","email":"northcutts0528@gmail.com"},{"to":"","first":"Emelia","last":"Odeneal","dob":"11/30/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Right Side Hitter","phone":"9316390502","email":"kandi.odeneal@gmail.com"},{"to":"","first":"Makenna","last":"Stowell","dob":"6/15/2010","division":"16 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"615-681-1995","email":"mlstowell72@gmail.com"},{"to":"","first":"Sophia","last":"Maignan","dob":"9/19/2010","division":"16 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"6155426434","email":"maignanlori@gmail.com"},{"to":"","first":"Anabelle","last":"Martinez","dob":"8/15/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"5203426807","email":"emarti77111@gmail.com"},{"to":"","first":"Hadley","last":"Martin","dob":"1/2/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"615-396-7164","email":"leslieandjonmartin@gmail.com"},{"to":"","first":"Ella ( Sophie)","last":"Brown","dob":"2/26/2010","division":"16 & Under","primaryPos":"Right Side Hitter","altPos":"Middle Hitter","phone":"6155794409","email":"brandibrown615@gmail.com"},{"to":"","first":"Kinley","last":"Northcutt","dob":"","division":"16 & Under","primaryPos":"DS","altPos":"Unsure","phone":"","email":""},{"to":"","first":"Anna Clark","last":"Geren","dob":"9/25/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"615-207-0420","email":"heathergeren@gmail.com"},{"to":"","first":"Morgan","last":"Alston","dob":"12/10/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"615-752-6388","email":"shavonne31@yahoo.com"},{"to":"","first":"Miriah","last":"McLemore","dob":"6/12/2010","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"615-424-9013","email":"mmclemore1@hotmail.com"},{"to":"","first":"Layla","last":"Benton","dob":"11/7/2009","division":"16 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"6154459539","email":"bentondesigns@comcast.net"},{"to":"","first":"Katelyn","last":"Crabtree","dob":"7/30/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"6155698202","email":"jessrenee32@gmail.com"},{"to":"","first":"Tirzah","last":"Douglas","dob":"6/12/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"N/A","phone":"901-338-3829","email":"janelledouglas0903@icloud.com"},{"to":"","first":"Vivian","last":"Elms","dob":"11/19/2009","division":"16 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"615-766-0050","email":"redleafclover@gmail.com"},{"to":"","first":"Daelynn","last":"Gardner","dob":"5/11/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"6157857167","email":"jennajayegardner@gmail.com"},{"to":"","first":"Gabby","last":"Knight","dob":"3/31/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"9312597920","email":"knighttonya81@gmail.com"},{"to":"","first":"Ainsley","last":"McCormack","dob":"5/26/2010","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6159456322","email":"kristenpmccormack@gmail.com"},{"to":"","first":"Samarah","last":"Odell","dob":"11/29/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"256-548-2153","email":"sonia.sablas@yahoo.com"},{"to":"","first":"Brielle","last":"Procaccino","dob":"7/31/2009","division":"16 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"2016868509","email":"yproc06@gmail.com"},{"to":"","first":"Sofia","last":"Bottoms","dob":"3/31/2009","division":"17 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"931-265-1069","email":"zavala@pcsstn.com"},{"to":"","first":"Abigail","last":"Carroll","dob":"11/18/2008","division":"17 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6152996493","email":"monwellac@gmail.com"},{"to":"","first":"Cecilia","last":"Damron","dob":"1/3/2009","division":"17 & Under","primaryPos":"Middle Hitter","altPos":"Middle Hitter","phone":"6158698253","email":"damronl79@gmail.com"},{"to":"","first":"Gabrielle","last":"Gardner","dob":"11/7/2008","division":"17 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"9315818008","email":"jnetgardner@aol.com"},{"to":"","first":"Stella","last":"Logan","dob":"6/6/2009","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6155064250","email":"jelogan@comcast.net"},{"to":"","first":"Lola","last":"Nuse","dob":"12/7/2009","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6157883923","email":"adamnuse@gmail.com"},{"to":"","first":"Molly","last":"Rooks","dob":"11/6/2008","division":"17 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6153378069","email":"samantharooks@comcast.net"},{"to":"","first":"Libby","last":"Rosenhagen","dob":"4/26/2009","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"6158128179","email":"rosy6972@gmail.com"},{"to":"","first":"Addison","last":"Vogt","dob":"2/15/2009","division":"17 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"7089217883","email":"paulamvogt@yahoo.com"},{"to":"","first":"Kendall","last":"Wojciechowski","dob":"6/30/2009","division":"17 & Under","primaryPos":"Middle Hitter","altPos":"Setter","phone":"6152945303","email":"middaughar22@gmail.com"},{"to":"","first":"Jasmyn","last":"Bernard","dob":"10/23/2008","division":"17 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"6153967960","email":"jnynebernard@gmail.com"},{"to":"","first":"Alyssa","last":"Boyd","dob":"1/2/2009","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Right Side Hitter","phone":"9312245507","email":"kboyd1982@gmail.com"},{"to":"","first":"Myla","last":"Hawkins","dob":"1/9/2009","division":"17 & Under","primaryPos":"Right Side Hitter","altPos":"Outside Hitter","phone":"6153979163","email":"andronicushawkins@yahoo.com"},{"to":"","first":"Mikaela","last":"Holder","dob":"7/6/2008","division":"17 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"616-804-3741","email":"staci.holder@comcast.net"},{"to":"","first":"MARIA","last":"LUJANO MENDOZA","dob":"1/12/2009","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"6153325482","email":"jenny170177@gmail.com"},{"to":"","first":"kayla","last":"mann","dob":"6/6/2009","division":"17 & Under","primaryPos":"Right Side Hitter","altPos":"Outside Hitter","phone":"6155686392","email":"allisonmoyer22@gmail.com"},{"to":"","first":"Juliana","last":"Bolmida","dob":"12/17/2008","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"6155822732","email":"dena.white88@yahoo.com"},{"to":"","first":"Kylie","last":"Bowling","dob":"1/19/2009","division":"17 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"9317037128","email":"jonathon.brown2091@icloud.com"},{"to":"","first":"Kinsey","last":"Cooper","dob":"10/25/2008","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"6156636745","email":"coopershannon805@gmail.com"},{"to":"","first":"Jiya","last":"King","dob":"3/16/2009","division":"17 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"615-710-6459","email":"akglover82@gmail.com"},{"to":"","first":"Ammara","last":"Mace","dob":"1/18/2009","division":"17 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"5403831121","email":"naomymace75@gmail.com"},{"to":"","first":"Gabrielle","last":"Reynolds","dob":"11/26/2008","division":"17 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"910-587-0808","email":"gabriel.reynolds1@gmail.com"},{"to":"","first":"Kristine","last":"Lee","dob":"11/7/2008","division":"17 & Under","primaryPos":"Middle Hitter","altPos":"Middle Hitter","phone":"303-875-0992","email":"jennyshin1215@hotmail.com"},{"to":"","first":"Haley","last":"Minnick","dob":"8/21/2008","division":"17 & Under","primaryPos":"Setter","altPos":"Defensive Specialist","phone":"6155562361","email":"minnickmilton@gmail.com"},{"to":"","first":"Amirah","last":"Brown","dob":"9/13/2008","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"931-644-6716","email":"lpoole0814@gmail.com"},{"to":"","first":"Kelycia","last":"Covington","dob":"9/30/2008","division":"17 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"6153374731","email":"kimbrand07@yahoo.com"},{"to":"","first":"Trinitee","last":"Moorman","dob":"6/22/2009","division":"17 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"6154231240","email":"devolla.moorman@yahoo.com"},{"to":"","first":"Brenna","last":"Putnam","dob":"3/17/2009","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"615-653-3175","email":"kellyputnam13@gmail.com"},{"to":"","first":"Danni","last":"Hillis","dob":"1/7/2009","division":"17 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"931-224-6585","email":"bgholt19190@gmail.com"},{"to":"","first":"Natalie","last":"Hudgens","dob":"10/27/2008","division":"17 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6159773603","email":"lahudgens@comcast.net"},{"to":"","first":"Madeleine","last":"Maignan","dob":"7/24/2009","division":"17 & Under","primaryPos":"Middle Hitter","altPos":"Outside Hitter","phone":"6155426434","email":"maignanlori@gmail.com"},{"to":"","first":"Kinsley","last":"Brown","dob":"9/17/2008","division":"17 & Under","primaryPos":"Right Side Hitter","altPos":"N/A","phone":"8329222163","email":"vickibrown0527@yahoo.com"},{"to":"","first":"Analeigh","last":"Gipson","dob":"12/10/2008","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"615-268-1104","email":"slbeadle88@gmail.com"},{"to":"","first":"Sydney","last":"Pack","dob":"9/22/2009","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"615-519-8527","email":"packamanda123@yahoo.com"},{"to":"","first":"Katie","last":"Parsley","dob":"8/23/2008","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6159132070","email":"gatorparsley@gmail.com"},{"to":"","first":"Paris","last":"Snyder","dob":"2/11/2009","division":"17 & Under","primaryPos":"I am unsure of my position","altPos":"Defensive Specialist","phone":"5044737724","email":"williamsnyder02@yahoo.com"},{"to":"","first":"ZOE","last":"TANG","dob":"2/3/2009","division":"17 & Under","primaryPos":"I am unsure of my position","altPos":"N/A","phone":"5732015303","email":"linxinxie@gmail.com"},{"to":"","first":"Arianna","last":"Thomas","dob":"11/10/2008","division":"17 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"6152434571","email":"born2basngr@gmail.com"},{"to":"","first":"Sydney","last":"Vogt","dob":"10/12/2010","division":"18 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"7089217883","email":"paulamvogt97@gmail.com"},{"to":"","first":"Isabella","last":"Martin","dob":"3/20/2008","division":"18 & Under","primaryPos":"Middle Hitter","altPos":"Middle Hitter","phone":"6156361587","email":"kanmartin24@yahoo.com"},{"to":"","first":"Lucy","last":"Nuse","dob":"","division":"18 & Under","primaryPos":"","altPos":"","phone":"","email":""},{"to":"","first":"Carlina","last":"Bauer","dob":"6/2/2008","division":"18 & Under","primaryPos":"Outside Hitter","altPos":"Middle Hitter","phone":"615-504-7727","email":"tina@walterhillutilities.com"},{"to":"","first":"Kierstan","last":"Blocker","dob":"8/5/2008","division":"18 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"6159954049","email":"laquandablocker@att.net"},{"to":"","first":"Jennifer","last":"Castillo","dob":"1/22/2008","division":"18 & Under","primaryPos":"Setter","altPos":"Right Side Hitter","phone":"6292515256","email":"norkizchirinos77@icloud.com"},{"to":"","first":"J\u00c3\u00a9Veyaeh","last":"Chambers","dob":"10/1/2007","division":"18 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"615-491-5317","email":"mychambers5@gmail.com"},{"to":"","first":"Somaia","last":"Jones","dob":"12/12/2007","division":"18 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"6152953679","email":"shawna0304@gmail.com"},{"to":"","first":"Mckenna","last":"Macleod","dob":"10/4/2008","division":"18 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"714-872-1482","email":"jlampton12@aol.com"},{"to":"","first":"Samantha","last":"Saldana","dob":"10/28/2007","division":"18 & Under","primaryPos":"Middle Hitter","altPos":"Right Side Hitter","phone":"615-427-8724","email":"cindytravis@gmail.com"},{"to":"","first":"Chloe","last":"Tassey","dob":"5/6/2008","division":"18 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"615-491-4769","email":"melindatassey@gmail.com"},{"to":"","first":"Bella","last":"Waters","dob":"1/31/2008","division":"18 & Under","primaryPos":"Defensive Specialist","altPos":"Defensive Specialist","phone":"5159714832","email":"waterskaral99@gmail.com"},{"to":"","first":"Brooke","last":"Becker","dob":"","division":"18 & Under","primaryPos":"","altPos":"","phone":"","email":""},{"to":"","first":"Lauren","last":"Gomillion","dob":"11/8/2007","division":"18 & Under","primaryPos":"Outside Hitter","altPos":"Right Side Hitter","phone":"919-413-3411","email":"family.gomillion@gmail.com"},{"to":"","first":"Mila","last":"Holt","dob":"6/24/2008","division":"18 & Under","primaryPos":"Defensive Specialist","altPos":"Outside Hitter","phone":"6153088243","email":"merlot8704@gmail.com"},{"to":"","first":"Victoria","last":"Vargas","dob":"1/4/2008","division":"18 & Under","primaryPos":"Defensive Specialist","altPos":"Right Side Hitter","phone":"6159565650","email":"albisvargas1972@gmail.com"},{"to":"","first":"Katie","last":"Blair","dob":"5/13/2008","division":"18 & Under","primaryPos":"Outside Hitter","altPos":"Defensive Specialist","phone":"615-300-8755","email":"szblair@yahoo.com"},{"to":"","first":"Aliviah","last":"Hensel","dob":"11/27/2007","division":"18 & Under","primaryPos":"Right Side Hitter","altPos":"Middle Hitter","phone":"9315757228","email":"candace_hensel84@yahoo.com"},{"to":"","first":"Raylin","last":"Eastland","dob":"6/3/2008","division":"18 & Under","primaryPos":"Defensive Specialist","altPos":"Setter","phone":"931-982-2581","email":"lindsey.eastland@gmail.com"}];

const AGE_GROUPS = ["12","13","14","15","16","17","18"];
const SKILL_LEVELS = ["Black","Blue","Silver","Yellow","White"];
const TEAM_COLORS = { Black:"#1a1a2e", Blue:"#1a3a5c", Silver:"#5a6270", Yellow:"#7a6b20", White:"#4a4a5a" };
const TEAM_BG = { Black:"#0d0d1a", Blue:"#0f2440", Silver:"#3a3f47", Yellow:"#4a4020", White:"#2a2a35" };
const POS_CATEGORIES = [
  { key:"setter", label:"Setters", abbr:"S", match:["setter","s"] },
  { key:"middle", label:"Middles", abbr:"M", match:["middle hitter","middle","m","mb"] },
  { key:"outside", label:"Outside / Right Side", abbr:"OH/RS", match:["outside hitter","outside","oh","right side hitter","right side","rs"] },
  { key:"defense", label:"Defense", abbr:"DS", match:["defensive specialist","defense","ds"] },
];

const STATIONS = [
  { key:"station1", label:"Station 1: Physical", metrics:["Height (in)","Reach (in)","Vertical (in)"], pin:"1111" },
  { key:"station2", label:"Station 2: Agility", metrics:["Agility 1","Agility 2","Agility 3"], pin:"2222" },
  { key:"station3", label:"Station 3: Drills", metrics:["Drill 1","Drill 2","Drill 3"], pin:"3333" },
  { key:"station4", label:"Station 4: Serving", metrics:["Serve 1","Serve 2","Serve 3"], pin:"4444" },
  { key:"station5", label:"Station 5: Setting", metrics:["Set 1","Set 2","Set 3"], pin:"5555" },
];
const HEAD_COACH_PIN = "0000";
const HIDE_REASONS = ["Athlete Declined","Coach Declined","Other"];

function classifyPos(pos) {
  if (!pos) return "unsorted";
  const p = pos.toLowerCase().trim();
  for (const cat of POS_CATEGORIES) { if (cat.match.some(m => p === m || p.includes(m))) return cat.key; }
  return "unsorted";
}
function divisionToAge(div) { if (!div) return null; const m = div.match(/(\d+)/); return m ? m[1] : null; }
function posAbbr(pos) {
  if (!pos) return "---";
  const p = pos.toLowerCase().trim();
  if (p.includes("setter") || p === "s") return "S";
  if (p.includes("middle") || p === "m" || p === "mb") return "M";
  if (p.includes("outside") || p === "oh") return "OH";
  if (p.includes("right side") || p === "rs") return "RS";
  if (p.includes("defensive") || p === "ds") return "DS";
  if (p.includes("unsure")) return "?";
  return pos.substring(0,3).toUpperCase();
}
function initAthletes(raw) {
  let counter = 100;
  return raw.filter(a => a.division && a.first).map(a => ({
    ...a, id: `${a.first}-${a.last}-${Math.random().toString(36).substr(2,6)}`,
    to: a.to || String(counter++), ageGroup: divisionToAge(a.division),
    posCategory: classifyPos(a.primaryPos), status: "pending", teamAssignment: null, coachPos: "",
    hidden: false, hideReason: "", hideNote: "", metrics: {},
  }));
}
function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim());
  if (lines.length < 2) return [];
  const rawH = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g,"").toLowerCase());
  const mapH = h => {
    if (h.includes("tryout") || h === "to" || h === "to#") return "to";
    if (h.includes("first")) return "first"; if (h.includes("last")) return "last";
    if (h === "dob" || h.includes("birth")) return "dob";
    if (h.includes("division") || h.includes("age group")) return "division";
    if (h.includes("primary") && h.includes("pos")) return "primaryPos";
    if ((h.includes("alt") || h.includes("secondary")) && h.includes("pos")) return "altPos";
    if (h.includes("phone")) return "phone";
    if (h.includes("email") && !h.includes("account")) return "email";
    return null;
  };
  const hMap = rawH.map(mapH);
  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const vals = lines[i].split(",").map(v => v.trim().replace(/^"|"$/g,""));
    const obj = {to:"",first:"",last:"",dob:"",division:"",primaryPos:"",altPos:"",phone:"",email:""};
    hMap.forEach((key, idx) => { if (key && vals[idx]) obj[key] = vals[idx]; });
    if (obj.first || obj.last) results.push(obj);
  }
  return results;
}
function getStationAvg(metrics, stationKey) {
  const vals = (metrics && metrics[stationKey]) || [];
  const nums = vals.filter(v => v !== null && v !== undefined && v !== "" && !isNaN(Number(v))).map(Number);
  return nums.length > 0 ? nums.reduce((a,b)=>a+b,0)/nums.length : null;
}
function getTotalScore(metrics) {
  let sum = 0, count = 0;
  STATIONS.forEach(s => { const avg = getStationAvg(metrics, s.key); if (avg !== null) { sum += avg; count++; } });
  return count > 0 ? (sum / count).toFixed(1) : null;
}
const offerTemplate = "Hello, I am pleased to extend an offer to {{NAME}} for Mid TN {{TEAM}} as a {{POSITION}}.\nCost, all schedules and coaching staff are available on our program guide at www.midtnvbc.com/clubtryouts.\n\nPlease select one of the following options:\n1. Accept\n2. Request a call\n3. Decline\n\nThank you!\nMid TN Admin";

function Badge({children, color="#4fc3f7", bg}) {
  return <span style={{display:"inline-block",padding:"2px 8px",borderRadius:4,fontSize:11,fontWeight:700,letterSpacing:.5,background:bg||color+"22",color,border:`1px solid ${color}44`,textTransform:"uppercase",whiteSpace:"nowrap"}}>{children}</span>;
}
function StatusBadge({status}) {
  const m = {pending:{color:"#aaa",label:"Pending"},contacted:{color:"#ffa726",label:"Contacted"},offered:{color:"#42a5f5",label:"Offered"},accepted:{color:"#66bb6a",label:"Accepted"},declined:{color:"#ef5350",label:"Declined"},info_requested:{color:"#ab47bc",label:"Info Req."}};
  const s = m[status]||m.pending;
  return <Badge color={s.color}>{s.label}</Badge>;
}
function Btn({children, onClick, color="#1565c0", outline, small, disabled, style:sx}) {
  return <button onClick={onClick} disabled={disabled} style={{padding:small?"5px 12px":"8px 18px",background:outline?"transparent":color,border:outline?`1px solid ${color}`:"none",borderRadius:6,color:outline?color:"#fff",cursor:disabled?"not-allowed":"pointer",fontSize:small?12:13,fontWeight:600,opacity:disabled?.5:1,transition:"all .15s",...sx}}>{children}</button>;
}
function PlayerCard({athlete, onClick, compact, showScore}) {
  const score = getTotalScore(athlete.metrics);
  return (
    <div draggable onDragStart={e => e.dataTransfer.setData("text/plain", athlete.id)}
      onClick={() => onClick?.(athlete)}
      style={{padding:compact?"6px 10px":"10px 14px",margin:"4px 0",
        background:athlete.status==="declined"?"#2a1215":athlete.hidden?"#1a1a10":"#1a1d24",
        border:`1px solid ${athlete.status==="declined"?"#ef535044":athlete.hidden?"#ffa72633":"#2a2e38"}`,
        borderRadius:8,cursor:"grab",display:"flex",alignItems:"center",gap:8,transition:"all .15s",
        opacity:athlete.hidden?0.45:athlete.status==="declined"?0.5:1}}>
      <span style={{fontFamily:"monospace",fontSize:11,color:"#4fc3f7",minWidth:28}}>#{athlete.to}</span>
      <span style={{fontWeight:600,fontSize:compact?12:13,color:"#e8eaed",flex:1}}>{athlete.first} {athlete.last}</span>
      <Badge color="#78909c">{posAbbr(athlete.primaryPos)}</Badge>
      {athlete.coachPos && <Badge color="#ffa726">{athlete.coachPos}</Badge>}
      {showScore && score && <Badge color="#66bb6a">{score}</Badge>}
      <StatusBadge status={athlete.status} />
    </div>
  );
}

function LoginScreen({onLogin}) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const tryLogin = () => {
    if (pin === HEAD_COACH_PIN) { onLogin({role:"head_coach",label:"Head Coach",station:null}); return; }
    const station = STATIONS.find(s => s.pin === pin);
    if (station) { onLogin({role:"station",label:station.label,station:station.key}); return; }
    setError("Invalid PIN. Try again.");
    setPin("");
  };
  return (
    <div style={{minHeight:"100vh",background:"#0d1017",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Inter',-apple-system,sans-serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div style={{background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:16,padding:40,width:380,textAlign:"center"}}>
        <div style={{fontSize:40,marginBottom:12}}>{"\u{1F3D0}"}</div>
        <h1 style={{margin:"0 0 4px",fontSize:24,fontWeight:800,color:"#e8eaed"}}>
          <span style={{color:"#4fc3f7"}}>MID TN</span> VBC
        </h1>
        <p style={{color:"#78909c",fontSize:14,margin:"0 0 28px"}}>Tryout Manager 2026-2027</p>
        <div style={{marginBottom:20}}>
          <input value={pin} onChange={e=>{setPin(e.target.value);setError("");}} onKeyDown={e=>{if(e.key==="Enter")tryLogin();}}
            type="password" placeholder="Enter Station PIN or Head Coach PIN" maxLength={6}
            style={{width:"100%",padding:"12px 16px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:8,color:"#e8eaed",fontSize:16,textAlign:"center",letterSpacing:8,boxSizing:"border-box"}} />
        </div>
        {error && <p style={{color:"#ef5350",fontSize:13,margin:"0 0 12px"}}>{error}</p>}
        <button onClick={tryLogin} style={{width:"100%",padding:"12px",background:"#1565c0",border:"none",borderRadius:8,color:"#fff",fontSize:15,fontWeight:700,cursor:"pointer",marginBottom:20}}>
          Log In
        </button>
        <div style={{borderTop:"1px solid #2a2e38",paddingTop:16}}>
          <div style={{fontSize:11,color:"#546e7a",marginBottom:8,textTransform:"uppercase",letterSpacing:1}}>Station PINs</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,fontSize:12}}>
            {STATIONS.map(s => <div key={s.key} style={{color:"#78909c"}}>{s.label.split(":")[0]}: <span style={{color:"#4fc3f7",fontFamily:"monospace"}}>{s.pin}</span></div>)}
            <div style={{color:"#78909c",gridColumn:"1/-1",marginTop:4}}>Head Coach: <span style={{color:"#ffa726",fontFamily:"monospace"}}>{HEAD_COACH_PIN}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StationEntryView({station, athletes, updateMetric, onLogout}) {
  const stationDef = STATIONS.find(s => s.key === station);
  const [toSearch, setToSearch] = useState("");
  const [activeAthlete, setActiveAthlete] = useState(null);
  const [recentEntries, setRecentEntries] = useState([]);

  const foundAthlete = useMemo(() => {
    if (!toSearch.trim()) return null;
    return athletes.find(a => a.to === toSearch.trim() && !a.hidden);
  }, [toSearch, athletes]);

  const loadAthlete = () => {
    if (foundAthlete) { setActiveAthlete(foundAthlete); }
  };

  const saveAndNext = () => {
    if (activeAthlete) {
      setRecentEntries(prev => [activeAthlete.id, ...prev.filter(x=>x!==activeAthlete.id)].slice(0,20));
      setActiveAthlete(null);
      setToSearch("");
    }
  };

  if (!stationDef) return null;
  const vals = activeAthlete ? ((activeAthlete.metrics && activeAthlete.metrics[station]) || ["","",""]) : ["","",""];
  const avg = activeAthlete ? getStationAvg(activeAthlete.metrics, station) : null;

  return (
    <div style={{minHeight:"100vh",background:"#0d1017",fontFamily:"'Inter',-apple-system,sans-serif",color:"#e8eaed"}}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div style={{background:"#1a1d24",borderBottom:"1px solid #2a2e38",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <h1 style={{margin:0,fontSize:20,fontWeight:800,color:"#4fc3f7"}}>{stationDef.label}</h1>
          <p style={{margin:0,fontSize:12,color:"#546e7a"}}>Mid TN VBC Tryouts 2026-2027</p>
        </div>
        <Btn small onClick={onLogout} color="#ef5350" outline>Log Out</Btn>
      </div>

      <div style={{maxWidth:600,margin:"0 auto",padding:24}}>
        {/* Search by TO# */}
        <div style={{background:"#1a1d24",borderRadius:12,border:"1px solid #2a2e38",padding:24,marginBottom:20}}>
          <div style={{fontSize:13,fontWeight:700,color:"#78909c",marginBottom:10,textTransform:"uppercase",letterSpacing:1}}>Look Up Athlete</div>
          <div style={{display:"flex",gap:10}}>
            <input value={toSearch} onChange={e=>setToSearch(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")loadAthlete();}}
              placeholder="Enter TO# (Tryout Number)" type="text"
              style={{flex:1,padding:"12px 16px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:8,color:"#e8eaed",fontSize:18,fontFamily:"monospace",letterSpacing:2}} />
            <Btn onClick={loadAthlete} disabled={!foundAthlete}>Load</Btn>
          </div>
          {toSearch && !foundAthlete && <p style={{color:"#ef5350",fontSize:12,marginTop:6,marginBottom:0}}>No athlete found with TO# {toSearch}</p>}
          {foundAthlete && !activeAthlete && (
            <div style={{marginTop:10,padding:12,background:"#12151c",borderRadius:8,display:"flex",alignItems:"center",gap:12,cursor:"pointer"}} onClick={loadAthlete}>
              <span style={{color:"#4fc3f7",fontFamily:"monospace",fontSize:14}}>#{foundAthlete.to}</span>
              <span style={{fontWeight:600,fontSize:15}}>{foundAthlete.first} {foundAthlete.last}</span>
              <Badge color="#78909c">{foundAthlete.ageGroup}s</Badge>
              <Badge color="#78909c">{posAbbr(foundAthlete.primaryPos)}</Badge>
            </div>
          )}
        </div>

        {/* Active Athlete Scoring */}
        {activeAthlete && (
          <div style={{background:"#1a1d24",borderRadius:12,border:"2px solid #4fc3f7",padding:24,marginBottom:20}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
              <div>
                <div style={{fontSize:22,fontWeight:800,color:"#e8eaed"}}>{activeAthlete.first} {activeAthlete.last}</div>
                <div style={{display:"flex",gap:8,marginTop:4}}>
                  <span style={{color:"#4fc3f7",fontFamily:"monospace",fontSize:14}}>TO# {activeAthlete.to}</span>
                  <Badge color="#78909c">{activeAthlete.ageGroup}s</Badge>
                  <Badge color="#78909c">{posAbbr(activeAthlete.primaryPos)}</Badge>
                </div>
              </div>
              {avg !== null && <div style={{textAlign:"right"}}>
                <div style={{fontSize:11,color:"#78909c",textTransform:"uppercase"}}>Station Avg</div>
                <div style={{fontSize:28,fontWeight:800,color:"#66bb6a",fontFamily:"monospace"}}>{avg.toFixed(1)}</div>
              </div>}
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              {stationDef.metrics.map((label, idx) => (
                <div key={idx}>
                  <label style={{display:"block",fontSize:13,fontWeight:600,color:"#78909c",marginBottom:6}}>{label}</label>
                  <input type="number" value={vals[idx]||""} autoFocus={idx===0}
                    onChange={e=>{const nv=[...vals];nv[idx]=e.target.value;updateMetric(activeAthlete.id,station,nv);
                      setActiveAthlete(prev=>({...prev,metrics:{...prev.metrics,[station]:nv}}));}}
                    style={{width:"100%",padding:"14px 18px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:8,color:"#e8eaed",fontSize:22,fontFamily:"monospace",textAlign:"center",boxSizing:"border-box"}} />
                </div>
              ))}
            </div>

            <div style={{display:"flex",gap:10,marginTop:20}}>
              <Btn onClick={saveAndNext} style={{flex:1,padding:"14px"}} color="#66bb6a">Save & Next Athlete</Btn>
              <Btn onClick={()=>{setActiveAthlete(null);setToSearch("");}} outline color="#78909c">Cancel</Btn>
            </div>
          </div>
        )}

        {/* Recent Entries */}
        {recentEntries.length > 0 && (
          <div style={{background:"#1a1d24",borderRadius:12,border:"1px solid #2a2e38",padding:16}}>
            <div style={{fontSize:12,fontWeight:700,color:"#78909c",marginBottom:8,textTransform:"uppercase"}}>Recently Scored</div>
            {recentEntries.map(id => {
              const a = athletes.find(x=>x.id===id);
              if (!a) return null;
              const sAvg = getStationAvg(a.metrics, station);
              return (
                <div key={id} style={{display:"flex",alignItems:"center",gap:10,padding:"6px 0",borderBottom:"1px solid #12151c",cursor:"pointer"}}
                  onClick={()=>{setActiveAthlete(a);setToSearch(a.to);}}>
                  <span style={{fontFamily:"monospace",fontSize:11,color:"#4fc3f7"}}>#{a.to}</span>
                  <span style={{fontSize:13,flex:1}}>{a.first} {a.last}</span>
                  {sAvg !== null && <Badge color="#66bb6a">{sAvg.toFixed(1)}</Badge>}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function EmailModal({athlete, team, onClose, onSend}) {
  const [body, setBody] = useState("");
  useEffect(() => {
    if (athlete) setBody(offerTemplate.replace("{{NAME}}",`${athlete.first} ${athlete.last}`).replace("{{TEAM}}",team||`${athlete.ageGroup}s`).replace("{{POSITION}}",athlete.coachPos||posAbbr(athlete.primaryPos)));
  }, [athlete,team]);
  if (!athlete) return null;
  return (
    <div style={{position:"fixed",inset:0,background:"#000a",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:14,padding:28,width:560,maxHeight:"80vh",overflow:"auto"}}>
        <h3 style={{margin:"0 0 4px",color:"#e8eaed",fontSize:18}}>Send Offer Email</h3>
        <p style={{color:"#78909c",fontSize:13,margin:"0 0 16px"}}>To: {athlete.email||"No email on file"}</p>
        <div style={{marginBottom:12}}>
          <label style={{color:"#aaa",fontSize:12,display:"block",marginBottom:4}}>Subject</label>
          <input defaultValue={`Mid TN VBC - Team Offer for ${athlete.first} ${athlete.last}`} style={{width:"100%",padding:"8px 12px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:6,color:"#e8eaed",fontSize:13,boxSizing:"border-box"}} />
        </div>
        <textarea value={body} onChange={e=>setBody(e.target.value)} rows={10} style={{width:"100%",padding:"10px 12px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:6,color:"#e8eaed",fontSize:13,fontFamily:"inherit",resize:"vertical",boxSizing:"border-box",marginBottom:16}} />
        <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
          <Btn onClick={onClose} color="#2a2e38">Cancel</Btn>
          <Btn onClick={()=>{onSend(athlete,body);onClose();}}>{athlete.email?"Send via Email":"Copy Text"}</Btn>
        </div>
      </div>
    </div>
  );
}

function HideModal({athlete, onClose, onHide}) {
  const [reason, setReason] = useState("Athlete Declined");
  const [note, setNote] = useState("");
  if (!athlete) return null;
  return (
    <div style={{position:"fixed",inset:0,background:"#000a",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:14,padding:28,width:420}}>
        <h3 style={{margin:"0 0 12px",color:"#e8eaed",fontSize:18}}>Hide Athlete</h3>
        <p style={{color:"#78909c",fontSize:13,margin:"0 0 16px"}}>{athlete.first} {athlete.last} (TO# {athlete.to})</p>
        <div style={{marginBottom:12}}>
          <label style={{color:"#aaa",fontSize:12,display:"block",marginBottom:6}}>Reason</label>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {HIDE_REASONS.map(r => <Btn key={r} small outline={reason!==r} color={reason===r?"#ffa726":"#546e7a"} onClick={()=>setReason(r)}>{r}</Btn>)}
          </div>
        </div>
        <div style={{marginBottom:16}}>
          <label style={{color:"#aaa",fontSize:12,display:"block",marginBottom:4}}>Note (optional)</label>
          <textarea value={note} onChange={e=>setNote(e.target.value)} rows={3} placeholder="Add any notes..."
            style={{width:"100%",padding:"8px 12px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:6,color:"#e8eaed",fontSize:13,fontFamily:"inherit",resize:"vertical",boxSizing:"border-box"}} />
        </div>
        <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
          <Btn onClick={onClose} color="#2a2e38">Cancel</Btn>
          <Btn onClick={()=>{onHide(athlete.id,reason,note);onClose();}} color="#ef5350">Hide Athlete</Btn>
        </div>
      </div>
    </div>
  );
}

function CSVImportModal({onClose, onImport}) {
  const [csvText, setCsvText] = useState("");
  const [preview, setPreview] = useState([]);
  const fileRef = useRef();
  const handleFile = e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => { const t = ev.target.result; setCsvText(t); setPreview(parseCSV(t).slice(0,5)); };
    reader.readAsText(file);
  };
  const handlePaste = t => { setCsvText(t); setPreview(parseCSV(t).slice(0,5)); };
  const total = csvText ? parseCSV(csvText).length : 0;
  return (
    <div style={{position:"fixed",inset:0,background:"#000a",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:14,padding:28,width:640,maxHeight:"85vh",overflow:"auto"}}>
        <h3 style={{margin:"0 0 4px",color:"#e8eaed",fontSize:18}}>Import Athletes from CSV</h3>
        <p style={{color:"#78909c",fontSize:13,margin:"0 0 16px"}}>Upload a CSV file or paste data. Columns: First Name, Last Name, Division, Primary Position, Alt Position, Phone, Email</p>
        <div style={{display:"flex",gap:12,marginBottom:16}}>
          <input type="file" accept=".csv,.txt" ref={fileRef} onChange={handleFile} style={{display:"none"}} />
          <Btn onClick={()=>fileRef.current?.click()}>Choose CSV File</Btn>
          <span style={{color:"#546e7a",fontSize:13,alignSelf:"center"}}>or paste below</span>
        </div>
        <textarea value={csvText} onChange={e=>handlePaste(e.target.value)} rows={6}
          placeholder="first_name,last_name,division,primary_position,alt_position,phone,email"
          style={{width:"100%",padding:"10px 12px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:6,color:"#e8eaed",fontSize:12,fontFamily:"monospace",resize:"vertical",boxSizing:"border-box",marginBottom:12}} />
        {preview.length > 0 && (
          <div style={{marginBottom:16}}>
            <div style={{fontSize:12,color:"#66bb6a",fontWeight:700,marginBottom:6}}>Preview ({total} athletes found):</div>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",fontSize:12,borderCollapse:"collapse"}}>
                <thead><tr style={{borderBottom:"1px solid #2a2e38"}}>{["First","Last","Division","Pos"].map(h=><th key={h} style={{padding:"4px 8px",color:"#78909c",textAlign:"left",fontSize:11}}>{h}</th>)}</tr></thead>
                <tbody>{preview.map((p,i)=><tr key={i} style={{borderBottom:"1px solid #1e222b"}}><td style={{padding:"4px 8px",color:"#e8eaed"}}>{p.first}</td><td style={{padding:"4px 8px",color:"#e8eaed"}}>{p.last}</td><td style={{padding:"4px 8px"}}>{p.division}</td><td style={{padding:"4px 8px",color:"#aaa"}}>{p.primaryPos}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        )}
        <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
          <Btn onClick={onClose} color="#2a2e38">Cancel</Btn>
          <Btn onClick={()=>{if(total>0){onImport(parseCSV(csvText));onClose();}}} color="#66bb6a" disabled={total===0}>Import {total} Athletes</Btn>
        </div>
      </div>
    </div>
  );
}

function PlayerDetail({athlete, onClose, onStatusChange, onCoachPos, onEmail, onHide, onUnhide, onMetricChange, canEditAll}) {
  if (!athlete) return null;
  const statuses = ["pending","contacted","offered","accepted","declined","info_requested"];
  const score = getTotalScore(athlete.metrics);
  return (
    <div style={{position:"fixed",inset:0,background:"#000a",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:14,padding:28,width:600,maxHeight:"90vh",overflow:"auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
          <div>
            <h3 style={{margin:0,color:"#e8eaed",fontSize:20}}>{athlete.first} {athlete.last}</h3>
            <div style={{display:"flex",gap:8,alignItems:"center",marginTop:4}}>
              <span style={{color:"#4fc3f7",fontSize:13,fontFamily:"monospace"}}>TO# {athlete.to}</span>
              <Badge color="#78909c">{athlete.ageGroup}s</Badge>
              {score && <Badge color="#66bb6a">Score: {score}</Badge>}
              {athlete.hidden && <Badge color="#ef5350">HIDDEN</Badge>}
            </div>
          </div>
          <button onClick={onClose} style={{background:"none",border:"none",color:"#666",fontSize:22,cursor:"pointer",lineHeight:1}}>x</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px 20px",marginBottom:20}}>
          {[["Primary Pos",athlete.primaryPos||"---"],["Alt Pos",athlete.altPos||"---"],["Phone",athlete.phone||"---"],["Email",athlete.email||"---"],["DOB",athlete.dob||"---"],["Division",athlete.division||"---"]].map(([l,v])=>(
            <div key={l}><div style={{fontSize:11,color:"#78909c",marginBottom:2,textTransform:"uppercase",letterSpacing:.5}}>{l}</div><div style={{fontSize:13,color:"#e8eaed",wordBreak:"break-all"}}>{v}</div></div>
          ))}
        </div>
        {athlete.hidden && (
          <div style={{background:"#2a1a10",border:"1px solid #ffa72633",borderRadius:8,padding:12,marginBottom:16}}>
            <div style={{fontSize:12,fontWeight:700,color:"#ffa726",marginBottom:4}}>Hidden: {athlete.hideReason}</div>
            {athlete.hideNote && <div style={{fontSize:12,color:"#ccc"}}>{athlete.hideNote}</div>}
            <Btn small onClick={()=>{onUnhide(athlete.id);onClose();}} color="#66bb6a" style={{marginTop:8}}>Unhide Athlete</Btn>
          </div>
        )}
        <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:16}}>
          <div style={{flex:1}}>
            <label style={{fontSize:11,color:"#78909c",display:"block",marginBottom:4}}>Status</label>
            <select value={athlete.status} onChange={e=>onStatusChange(athlete.id,e.target.value)} style={{width:"100%",padding:"6px 10px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:6,color:"#e8eaed",fontSize:13}}>
              {statuses.map(s=><option key={s} value={s}>{s.charAt(0).toUpperCase()+s.slice(1).replace("_"," ")}</option>)}
            </select>
          </div>
          <div style={{flex:1}}>
            <label style={{fontSize:11,color:"#78909c",display:"block",marginBottom:4}}>Coach POS Pick</label>
            <select value={athlete.coachPos||""} onChange={e=>onCoachPos(athlete.id,e.target.value)} style={{width:"100%",padding:"6px 10px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:6,color:"#e8eaed",fontSize:13}}>
              <option value="">---</option>{["S","M","OH","RS","DS","L"].map(p=><option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
        {/* Tryout Metrics */}
        <div style={{borderTop:"1px solid #2a2e38",paddingTop:16,marginBottom:16}}>
          <div style={{fontSize:13,fontWeight:700,color:"#4fc3f7",marginBottom:10}}>Tryout Metrics</div>
          {STATIONS.map(station => {
            const vals = (athlete.metrics && athlete.metrics[station.key]) || ["","",""];
            const avg = getStationAvg(athlete.metrics, station.key);
            return (
              <div key={station.key} style={{marginBottom:10}}>
                <div style={{fontSize:11,color:"#78909c",fontWeight:600,marginBottom:4,display:"flex",justifyContent:"space-between"}}>
                  <span>{station.label}</span>
                  {avg !== null && <span style={{color:"#66bb6a"}}>Avg: {avg.toFixed(1)}</span>}
                </div>
                <div style={{display:"flex",gap:8}}>
                  {station.metrics.map((label, idx) => (
                    <div key={idx} style={{flex:1}}>
                      <div style={{fontSize:10,color:"#546e7a",marginBottom:2}}>{label}</div>
                      <input type="number" value={vals[idx]||""} disabled={!canEditAll}
                        onChange={e=>{const nv=[...vals];nv[idx]=e.target.value;onMetricChange(athlete.id,station.key,nv);}}
                        style={{width:"100%",padding:"5px 8px",background:canEditAll?"#12151c":"#0d1017",border:"1px solid #2a2e38",borderRadius:4,color:canEditAll?"#e8eaed":"#666",fontSize:13,boxSizing:"border-box"}} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          {score && <div style={{textAlign:"right",fontSize:14,fontWeight:700,color:"#66bb6a",marginTop:4}}>Total Score: {score}</div>}
        </div>
        <div style={{display:"flex",gap:10}}>
          <Btn onClick={()=>{onEmail(athlete);onClose();}} style={{flex:1}}>Send Offer Email</Btn>
          {!athlete.hidden && <Btn onClick={()=>onHide(athlete)} color="#ef5350" outline>Hide</Btn>}
        </div>
      </div>
    </div>
  );
}

const thS = {padding:"8px 6px",textAlign:"left",color:"#78909c",fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:.5,whiteSpace:"nowrap"};
const tdS = {padding:"6px",verticalAlign:"middle"};

function TryoutResultsView({athletes, activeAge, onSelectPlayer, updateMetric}) {
  const [stationFilter, setStationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const ageAthletes = useMemo(() => athletes.filter(a => a.ageGroup === activeAge && !a.hidden), [athletes, activeAge]);
  const sorted = useMemo(() => {
    const arr = [...ageAthletes];
    if (sortBy === "score") arr.sort((a,b) => (Number(getTotalScore(b.metrics))||0) - (Number(getTotalScore(a.metrics))||0));
    else if (sortBy === "name") arr.sort((a,b) => a.last.localeCompare(b.last));
    else arr.sort((a,b) => (getStationAvg(b.metrics,sortBy)||0) - (getStationAvg(a.metrics,sortBy)||0));
    return arr;
  }, [ageAthletes, sortBy]);
  const stationsToShow = stationFilter === "all" ? STATIONS : STATIONS.filter(s => s.key === stationFilter);
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:10}}>
        <h2 style={{fontSize:18,fontWeight:700,margin:0,color:"#e8eaed"}}>{activeAge}'s Tryout Results</h2>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          <select value={stationFilter} onChange={e=>setStationFilter(e.target.value)} style={{padding:"5px 10px",background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:6,color:"#e8eaed",fontSize:12}}>
            <option value="all">All Stations</option>
            {STATIONS.map(s=><option key={s.key} value={s.key}>{s.label}</option>)}
          </select>
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={{padding:"5px 10px",background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:6,color:"#e8eaed",fontSize:12}}>
            <option value="name">Sort: Name</option><option value="score">Sort: Total Score</option>
            {STATIONS.map(s=><option key={s.key} value={s.key}>Sort: {s.label}</option>)}
          </select>
        </div>
      </div>
      <div style={{overflowX:"auto"}}>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
          <thead><tr style={{borderBottom:"2px solid #2a2e38"}}>
            <th style={thS}>TO#</th><th style={thS}>Name</th><th style={thS}>POS</th>
            {stationsToShow.map(station => station.metrics.map((m,i) => <th key={station.key+i} style={{...thS,color:"#4fc3f7"}}>{m}</th>))}
            {stationsToShow.map(s => <th key={s.key+"avg"} style={{...thS,color:"#ffa726"}}>Avg</th>)}
            <th style={{...thS,color:"#66bb6a"}}>Total</th>
          </tr></thead>
          <tbody>
            {sorted.map(a => {
              const sc = getTotalScore(a.metrics);
              return (
                <tr key={a.id} style={{borderBottom:"1px solid #1e222b",cursor:"pointer"}} onClick={()=>onSelectPlayer(a)}
                  onMouseEnter={e=>e.currentTarget.style.background="#1a1d24"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                  <td style={tdS}><span style={{color:"#4fc3f7",fontFamily:"monospace"}}>{a.to}</span></td>
                  <td style={tdS}><span style={{fontWeight:600}}>{a.first} {a.last}</span></td>
                  <td style={tdS}><Badge color="#78909c">{posAbbr(a.primaryPos)}</Badge></td>
                  {stationsToShow.map(station => station.metrics.map((m,idx) => {
                    const vs = (a.metrics&&a.metrics[station.key])||[];
                    return <td key={station.key+idx} style={tdS}>
                      <input type="number" value={vs[idx]||""} onClick={e=>e.stopPropagation()}
                        onChange={e=>{const nv=[...(a.metrics&&a.metrics[station.key]||["","",""])];nv[idx]=e.target.value;updateMetric(a.id,station.key,nv);}}
                        style={{width:52,padding:"3px 6px",background:"#12151c",border:"1px solid #2a2e38",borderRadius:4,color:"#e8eaed",fontSize:12,textAlign:"center"}} />
                    </td>;
                  }))}
                  {stationsToShow.map(s => {
                    const av = getStationAvg(a.metrics, s.key);
                    return <td key={s.key+"a"} style={{...tdS,color:"#ffa726",fontWeight:700,fontFamily:"monospace"}}>{av!==null?av.toFixed(1):"---"}</td>;
                  })}
                  <td style={{...tdS,fontWeight:800,fontSize:14,fontFamily:"monospace"}}>
                    {sc ? <span style={{color:Number(sc)>=7?"#66bb6a":Number(sc)>=5?"#ffa726":"#ef5350"}}>{sc}</span> : <span style={{color:"#444"}}>---</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {sorted.length === 0 && <div style={{padding:40,textAlign:"center",color:"#444",fontSize:13}}>No athletes in {activeAge}s</div>}
    </div>
  );
}

function HiddenView({athletes, onUnhide, onSelect}) {
  const hidden = athletes.filter(a => a.hidden);
  const grouped = {};
  hidden.forEach(a => { const r = a.hideReason||"Other"; if (!grouped[r]) grouped[r]=[]; grouped[r].push(a); });
  return (
    <div>
      <h2 style={{fontSize:18,fontWeight:700,margin:"0 0 16px",color:"#e8eaed"}}>Hidden Athletes ({hidden.length})</h2>
      {hidden.length === 0 && <div style={{padding:40,textAlign:"center",color:"#444"}}>No hidden athletes</div>}
      {Object.entries(grouped).map(([reason, list]) => (
        <div key={reason} style={{marginBottom:20}}>
          <div style={{fontSize:13,fontWeight:700,color:"#ffa726",marginBottom:8}}>{reason} ({list.length})</div>
          {list.map(a => (
            <div key={a.id} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"#1a1a10",border:"1px solid #ffa72622",borderRadius:8,marginBottom:4}}>
              <span style={{fontFamily:"monospace",fontSize:11,color:"#4fc3f7"}}>#{a.to}</span>
              <span style={{fontWeight:600,fontSize:13,color:"#e8eaed",flex:1,cursor:"pointer"}} onClick={()=>onSelect(a)}>{a.first} {a.last}</span>
              <Badge color="#78909c">{a.ageGroup}s</Badge>
              {a.hideNote && <span style={{fontSize:11,color:"#888",maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{a.hideNote}</span>}
              <Btn small onClick={()=>onUnhide(a.id)} color="#66bb6a">Unhide</Btn>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function TryoutApp() {
  const [user, setUser] = useState(null); // {role, label, station}
  const [athletes, setAthletes] = useState(() => initAthletes(RAW_ATHLETES));
  const [activeAge, setActiveAge] = useState("12");
  const [view, setView] = useState("depth");
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [emailPlayer, setEmailPlayer] = useState(null);
  const [emailTeam, setEmailTeam] = useState("");
  const [hidePlayer, setHidePlayer] = useState(null);
  const [showImport, setShowImport] = useState(false);
  const [search, setSearch] = useState("");

  const updateAthlete = useCallback((id, updates) => {
    setAthletes(prev => prev.map(a => a.id === id ? {...a,...updates} : a));
    setSelectedPlayer(p => p?.id === id ? {...p,...updates} : p);
  }, []);
  const updateMetric = useCallback((id, stationKey, values) => {
    setAthletes(prev => prev.map(a => a.id === id ? {...a, metrics:{...a.metrics, [stationKey]:values}} : a));
    setSelectedPlayer(p => p?.id === id ? {...p, metrics:{...p.metrics, [stationKey]:values}} : p);
  }, []);
  const hideAthlete = useCallback((id, reason, note) => updateAthlete(id, {hidden:true, hideReason:reason, hideNote:note, teamAssignment:null}), [updateAthlete]);
  const unhideAthlete = useCallback((id) => updateAthlete(id, {hidden:false, hideReason:"", hideNote:""}), [updateAthlete]);
  const importAthletes = useCallback((newRaw) => setAthletes(prev => [...prev, ...initAthletes(newRaw)]), []);
  const handleSendEmail = useCallback((athlete, body) => {
    updateAthlete(athlete.id, {status: athlete.status==="pending"?"contacted":athlete.status});
    if (athlete.email) { window.open(`mailto:${athlete.email}?subject=${encodeURIComponent(`Mid TN VBC - Offer for ${athlete.first} ${athlete.last}`)}&body=${encodeURIComponent(body)}`, "_blank"); }
    else { navigator.clipboard?.writeText(body); }
  }, [updateAthlete]);

  // If not logged in, show login
  if (!user) return <LoginScreen onLogin={setUser} />;

  // If station user, show station entry view
  if (user.role === "station") {
    return <StationEntryView station={user.station} athletes={athletes} updateMetric={updateMetric} onLogout={()=>setUser(null)} />;
  }

  // Head Coach view below
  const ageAthletes = athletes.filter(a => a.ageGroup === activeAge && !a.hidden);
  const grouped = {setter:[],middle:[],outside:[],defense:[],unsorted:[]};
  ageAthletes.forEach(a => { if (!a.teamAssignment) (grouped[a.posCategory]||grouped.unsorted).push(a); });
  const teamRosters = {};
  SKILL_LEVELS.forEach(lvl => { teamRosters[`${activeAge}-${lvl}`] = ageAthletes.filter(a => a.teamAssignment === `${activeAge}-${lvl}`); });
  const filteredAll = (() => {
    let list = athletes.filter(a => a.division && !a.hidden);
    if (search) { const s = search.toLowerCase(); list = list.filter(a => a.first.toLowerCase().includes(s)||a.last.toLowerCase().includes(s)||a.to.includes(s)||a.division.toLowerCase().includes(s)||a.primaryPos.toLowerCase().includes(s)); }
    return list;
  })();
  const allTeamsData = {};
  AGE_GROUPS.forEach(age => { allTeamsData[age] = {}; SKILL_LEVELS.forEach(lvl => { allTeamsData[age][lvl] = athletes.filter(a => a.teamAssignment===`${age}-${lvl}` && !a.hidden); }); });
  const totalReg = athletes.filter(a=>a.division&&!a.hidden).length;
  const totalAssigned = athletes.filter(a=>a.teamAssignment&&!a.hidden).length;
  const totalAccepted = athletes.filter(a=>a.status==="accepted"&&!a.hidden).length;
  const totalHidden = athletes.filter(a=>a.hidden).length;
  const showAgeNav = ["depth","teams","tryout"].includes(view);

  return (
    <div style={{fontFamily:"'Inter',-apple-system,sans-serif",background:"#0d1017",color:"#e8eaed",minHeight:"100vh"}}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* HEADER */}
      <div style={{background:"linear-gradient(135deg,#0d1017,#1a1d24)",borderBottom:"1px solid #1e222b",padding:"16px 24px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
          <div>
            <h1 style={{margin:0,fontSize:22,fontWeight:800,letterSpacing:-.5}}>
              <span style={{color:"#4fc3f7"}}>MID TN</span> <span style={{color:"#78909c"}}>VBC</span> Tryout Manager
            </h1>
            <div style={{fontSize:12,color:"#546e7a",marginTop:2}}>Head Coach View | 2026-2027</div>
          </div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
            {[{l:`${totalReg} Reg`,c:"#4fc3f7"},{l:`${totalAssigned} Assigned`,c:"#66bb6a"},{l:`${totalAccepted} Accepted`,c:"#ab47bc"},{l:`${totalHidden} Hidden`,c:"#ffa726"}].map(s=><Badge key={s.l} color={s.c}>{s.l}</Badge>)}
            <Btn small onClick={()=>setShowImport(true)} color="#66bb6a">+ Import CSV</Btn>
            <Btn small onClick={()=>setUser(null)} color="#ef5350" outline>Log Out</Btn>
          </div>
        </div>
        <div style={{display:"flex",gap:6,marginTop:14,flexWrap:"wrap",alignItems:"center"}}>
          {[{key:"allreg",label:"All Reg"},{key:"depth",label:"Depth Charts"},{key:"tryout",label:"Tryout Results"},{key:"teams",label:"Team Builder"},{key:"allteams",label:"All Teams"},{key:"hidden",label:`Hidden (${totalHidden})`}].map(n=>(
            <button key={n.key} onClick={()=>setView(n.key)} style={{padding:"7px 16px",borderRadius:6,border:"none",cursor:"pointer",fontSize:13,fontWeight:600,background:view===n.key?"#1565c0":"#1a1d24",color:view===n.key?"#fff":"#78909c"}}>{n.label}</button>
          ))}
          <div style={{flex:1}} />
          {showAgeNav && <div style={{display:"flex",gap:3,background:"#12151c",borderRadius:6,padding:2}}>
            {AGE_GROUPS.map(ag=><button key={ag} onClick={()=>setActiveAge(ag)} style={{padding:"5px 14px",borderRadius:4,border:"none",cursor:"pointer",fontSize:13,fontWeight:700,background:activeAge===ag?"#4fc3f7":"transparent",color:activeAge===ag?"#0d1017":"#546e7a"}}>{ag}s</button>)}
          </div>}
        </div>
      </div>

      <div style={{padding:"20px 24px"}}>
        {/* ALL REG */}
        {view === "allreg" && <div>
          <div style={{display:"flex",gap:12,marginBottom:16,alignItems:"center"}}>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, TO#, position, division..." style={{flex:1,maxWidth:400,padding:"8px 14px",background:"#1a1d24",border:"1px solid #2a2e38",borderRadius:8,color:"#e8eaed",fontSize:13}} />
            <span style={{color:"#546e7a",fontSize:13}}>{filteredAll.length} athletes</span>
          </div>
          <div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
            <thead><tr style={{borderBottom:"1px solid #2a2e38"}}>{["TO#","First","Last","Div","POS","Alt","Phone","Email","Score","Status",""].map(h=><th key={h} style={{padding:"8px 10px",textAlign:"left",color:"#78909c",fontSize:11,fontWeight:600,textTransform:"uppercase"}}>{h}</th>)}</tr></thead>
            <tbody>{filteredAll.map(a => {const sc=getTotalScore(a.metrics); return (
              <tr key={a.id} onClick={()=>setSelectedPlayer(a)} style={{borderBottom:"1px solid #1a1d24",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.background="#1a1d24"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                <td style={{padding:"8px 10px",fontFamily:"monospace",color:"#4fc3f7"}}>{a.to}</td><td style={{padding:"8px 10px"}}>{a.first}</td><td style={{padding:"8px 10px"}}>{a.last}</td>
                <td style={{padding:"8px 10px"}}><Badge color="#78909c">{a.ageGroup}s</Badge></td><td style={{padding:"8px 10px"}}><Badge color="#4fc3f7">{posAbbr(a.primaryPos)}</Badge></td>
                <td style={{padding:"8px 10px",color:"#78909c"}}>{posAbbr(a.altPos)}</td><td style={{padding:"8px 10px",color:"#78909c",fontSize:12}}>{a.phone}</td>
                <td style={{padding:"8px 10px",color:"#78909c",fontSize:12,maxWidth:180,overflow:"hidden",textOverflow:"ellipsis"}}>{a.email}</td>
                <td style={{padding:"8px 10px"}}>{sc?<Badge color="#66bb6a">{sc}</Badge>:<span style={{color:"#333"}}>---</span>}</td>
                <td style={{padding:"8px 10px"}}><StatusBadge status={a.status}/></td>
                <td style={{padding:"8px 10px"}}><Btn small onClick={e=>{e.stopPropagation();setHidePlayer(a);}} color="#ef5350" outline>Hide</Btn></td>
              </tr>);})}</tbody>
          </table></div>
        </div>}

        {/* DEPTH CHART */}
        {view === "depth" && <div>
          <h2 style={{fontSize:18,fontWeight:700,margin:"0 0 16px"}}>{activeAge}'s Depth Chart</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16}}>
            {POS_CATEGORIES.map(cat => (
              <div key={cat.key} style={{background:"#12151c",borderRadius:12,border:"1px solid #1e222b",overflow:"hidden"}}>
                <div style={{padding:"12px 16px",background:"#1a1d24",borderBottom:"1px solid #1e222b",display:"flex",justifyContent:"space-between"}}>
                  <span style={{fontWeight:700,fontSize:14,color:"#4fc3f7"}}>{cat.label}</span>
                  <span style={{fontSize:12,color:"#546e7a"}}>{grouped[cat.key]?.length||0}</span>
                </div>
                <div style={{padding:10,maxHeight:500,overflowY:"auto"}}>
                  {(grouped[cat.key]||[]).map(a=><PlayerCard key={a.id} athlete={a} onClick={setSelectedPlayer} showScore />)}
                  {(grouped[cat.key]||[]).length===0&&<div style={{padding:20,textAlign:"center",color:"#333",fontSize:12}}>No players</div>}
                </div>
              </div>
            ))}
            {grouped.unsorted.length>0&&<div style={{background:"#12151c",borderRadius:12,border:"1px solid #1e222b",overflow:"hidden"}}>
              <div style={{padding:"12px 16px",background:"#1a1d24",borderBottom:"1px solid #1e222b",display:"flex",justifyContent:"space-between"}}>
                <span style={{fontWeight:700,fontSize:14,color:"#ffa726"}}>Unsorted / Unsure</span><span style={{fontSize:12,color:"#546e7a"}}>{grouped.unsorted.length}</span>
              </div>
              <div style={{padding:10,maxHeight:500,overflowY:"auto"}}>{grouped.unsorted.map(a=><PlayerCard key={a.id} athlete={a} onClick={setSelectedPlayer} showScore />)}</div>
            </div>}
          </div>
        </div>}

        {/* TRYOUT RESULTS */}
        {view === "tryout" && <TryoutResultsView athletes={athletes} activeAge={activeAge} onSelectPlayer={setSelectedPlayer} updateMetric={updateMetric} />}

        {/* TEAM BUILDER */}
        {view === "teams" && <div>
          <h2 style={{fontSize:18,fontWeight:700,margin:"0 0 4px"}}>{activeAge}'s Team Builder</h2>
          <p style={{color:"#546e7a",fontSize:13,margin:"0 0 16px"}}>Drag players from the pool into team rosters. Click any player for details, metrics, and offers.</p>
          <div style={{marginBottom:24}}>
            <div style={{fontSize:13,fontWeight:700,color:"#78909c",marginBottom:8,textTransform:"uppercase",letterSpacing:1}}>Available Pool ({ageAthletes.filter(a=>!a.teamAssignment).length})</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:8}}>
              {POS_CATEGORIES.map(cat => {const l=grouped[cat.key]||[];if(!l.length)return null;return(
                <div key={cat.key}><div style={{fontSize:11,color:"#4fc3f7",fontWeight:700,marginBottom:4,textTransform:"uppercase"}}>{cat.label} ({l.length})</div>
                  {l.slice(0,6).map(a=><PlayerCard key={a.id} athlete={a} onClick={setSelectedPlayer} compact showScore />)}
                  {l.length>6&&<div style={{fontSize:11,color:"#546e7a",padding:4,textAlign:"center"}}>+{l.length-6} more</div>}
                </div>);})}
              {grouped.unsorted.length>0&&<div><div style={{fontSize:11,color:"#ffa726",fontWeight:700,marginBottom:4,textTransform:"uppercase"}}>Unsorted ({grouped.unsorted.length})</div>
                {grouped.unsorted.slice(0,4).map(a=><PlayerCard key={a.id} athlete={a} onClick={setSelectedPlayer} compact showScore />)}</div>}
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16}}>
            {SKILL_LEVELS.map(lvl => {const key=`${activeAge}-${lvl}`;const roster=teamRosters[key]||[];const color=TEAM_COLORS[lvl];
              const declined=roster.filter(a=>a.status==="declined");const active=roster.filter(a=>a.status!=="declined");
              return(<div key={lvl} style={{background:TEAM_BG[lvl],borderRadius:12,border:`1px solid ${color}55`,overflow:"hidden"}}>
                <div style={{padding:"12px 16px",background:color,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontWeight:800,fontSize:15,color:"#fff"}}>{activeAge} {lvl}</span>
                  <span style={{fontSize:12,color:"#fff9",background:"#fff2",padding:"2px 8px",borderRadius:10}}>{roster.length}/12</span>
                </div>
                <div onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();updateAthlete(e.dataTransfer.getData("text/plain"),{teamAssignment:key});}} style={{padding:12,minHeight:150}}>
                  {active.length===0&&declined.length===0&&<div style={{padding:30,textAlign:"center",color:"#555",fontSize:13,border:"2px dashed #333",borderRadius:8}}>Drop players here</div>}
                  {active.map(a=><div key={a.id} style={{position:"relative"}}><PlayerCard athlete={a} onClick={setSelectedPlayer} compact showScore />
                    <button onClick={()=>updateAthlete(a.id,{teamAssignment:null})} title="Remove" style={{position:"absolute",right:6,top:"50%",transform:"translateY(-50%)",background:"#ef535033",border:"none",borderRadius:4,color:"#ef5350",cursor:"pointer",fontSize:12,padding:"2px 6px"}}>x</button></div>)}
                  {declined.length>0&&<div style={{marginTop:12,borderTop:"1px solid #333",paddingTop:8}}>
                    <div style={{fontSize:11,color:"#ef5350",fontWeight:700,marginBottom:4}}>DECLINED</div>
                    {declined.map(a=><div key={a.id} style={{position:"relative"}}><PlayerCard athlete={a} onClick={setSelectedPlayer} compact />
                      <button onClick={()=>updateAthlete(a.id,{teamAssignment:null})} style={{position:"absolute",right:6,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"#666",cursor:"pointer",fontSize:12}}>x</button></div>)}
                  </div>}
                </div>
                <div style={{padding:"8px 12px",borderTop:`1px solid ${color}33`}}>
                  <Btn small onClick={()=>{if(roster.length){roster.forEach(a=>updateAthlete(a.id,{status:a.status==="pending"?"offered":a.status}));setEmailPlayer(roster[0]);setEmailTeam(`${activeAge} ${lvl}`);}}} color={color} style={{width:"100%"}}>Send Offers ({roster.length})</Btn>
                </div>
              </div>);})}
          </div>
        </div>}

        {/* ALL TEAMS */}
        {view === "allteams" && <div>
          <h2 style={{fontSize:18,fontWeight:700,margin:"0 0 16px"}}>All Teams Overview</h2>
          {AGE_GROUPS.map(age => {const has=SKILL_LEVELS.some(l=>(allTeamsData[age]?.[l]||[]).length>0);if(!has)return null;
            return(<div key={age} style={{marginBottom:24}}>
              <h3 style={{fontSize:16,fontWeight:700,color:"#4fc3f7",margin:"0 0 12px",borderBottom:"1px solid #1e222b",paddingBottom:6}}>{age}'s</h3>
              <div style={{display:"grid",gridTemplateColumns:`repeat(${SKILL_LEVELS.length}, 1fr)`,gap:12}}>
                {SKILL_LEVELS.map(lvl => {const roster=allTeamsData[age]?.[lvl]||[];const cl=TEAM_COLORS[lvl];
                  return(<div key={lvl} style={{background:"#12151c",borderRadius:10,border:`1px solid ${cl}44`,overflow:"hidden"}}>
                    <div style={{padding:"8px 12px",background:cl,textAlign:"center"}}><span style={{fontWeight:800,fontSize:13,color:"#fff"}}>{age} {lvl}</span></div>
                    <div style={{padding:8}}>{roster.length===0?<div style={{padding:16,textAlign:"center",color:"#444",fontSize:11}}>Empty</div>:
                      roster.map(a=><div key={a.id} style={{padding:"4px 8px",fontSize:12,display:"flex",gap:6,alignItems:"center",borderBottom:"1px solid #1a1d2488",cursor:"pointer"}} onClick={()=>setSelectedPlayer(a)}>
                        <span style={{color:"#4fc3f7",fontFamily:"monospace",fontSize:10,minWidth:24}}>{a.to}</span>
                        <span style={{flex:1}}>{a.first} {a.last}</span>
                        <Badge color="#78909c">{a.coachPos||posAbbr(a.primaryPos)}</Badge>
                        <StatusBadge status={a.status}/></div>)}</div>
                  </div>);})}
              </div></div>);})}
          {!AGE_GROUPS.some(age=>SKILL_LEVELS.some(l=>(allTeamsData[age]?.[l]||[]).length>0))&&
            <div style={{padding:60,textAlign:"center",color:"#444"}}><div style={{fontSize:15}}>No teams assembled yet. Use Team Builder to drag players into rosters.</div></div>}
        </div>}

        {view === "hidden" && <HiddenView athletes={athletes} onUnhide={unhideAthlete} onSelect={setSelectedPlayer} />}
      </div>

      <PlayerDetail athlete={selectedPlayer} onClose={()=>setSelectedPlayer(null)} canEditAll={true}
        onStatusChange={(id,s)=>updateAthlete(id,{status:s})} onCoachPos={(id,p)=>updateAthlete(id,{coachPos:p})}
        onEmail={a=>{setSelectedPlayer(null);setEmailPlayer(a);}} onHide={a=>{setSelectedPlayer(null);setHidePlayer(a);}}
        onUnhide={unhideAthlete} onMetricChange={updateMetric} />
      <EmailModal athlete={emailPlayer} team={emailTeam} onClose={()=>{setEmailPlayer(null);setEmailTeam("");}} onSend={handleSendEmail} />
      <HideModal athlete={hidePlayer} onClose={()=>setHidePlayer(null)} onHide={hideAthlete} />
      {showImport && <CSVImportModal onClose={()=>setShowImport(false)} onImport={importAthletes} />}
    </div>
  );
}
