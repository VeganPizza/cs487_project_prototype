import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import HTML from "react-native-render-html";
import {article_url, _api_key, category, country_code} from './article'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacityBase, Alert,
} from "react-native";
import THEME from "../../constants/THEME";
import Header from "../../navigation/Header";
import { TextInput, Avatar } from "react-native-paper";
import * as Progress from "react-native-progress";
// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
// let announcement;
// announcement = {};

export async function getArticles(){
  try {
    let articles = await fetch('${articles_url}?country=${country_code}&category=${category}', {
      headers: {
        'X-API-KEY': _api_key
      }
    });
    let result = await articles.json();
    articles = null;
    return result;
  }catch (error){
    throw(error)
  }
}

const HomeScreen = (props) => {
  // const webpage = {
  //   isLoading: true,
  //   data: null
  // }
  // const dataexported = () => {
  //   getArticles().then(data=> {
  //   webpage.setState(
  //       {
  //         isLoading: false,
  //         data: data
  //       }
  //   );}, error => {
  //         Alert.alert('error', 'page not loaded');
  //       }
  //   );
  // }
  const inputTheme = {
    colors: {
      placeholder: 'gray',
      text: "white",
      primary: THEME.COLORS.GREEEN,
      underlineColor: "#fff",
    },
  }
  const htmlContent = `
    <body class="path-node page-node-type-article navbar-is-fixed-top has-glyphicons">
  <a class="visually-hidden focusable skip-link" href="#main-content">
   Skip to main content
  </a>
  <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
   <header class="navbar navbar-default navbar-fixed-top" id="navbar" role="banner">
    <div class="container-fluid">
     <div class="navbar-header">
      <div class="region region-navigation">
       <a class="logo navbar-btn pull-left" href="/" rel="home" title="Home">
        <img alt="Home" src="/sites/default/files/TechNews%20-%20Copy_0.png"/>
       </a>
      </div>
      <button class="navbar-toggle" data-target="#navbar-collapse" data-toggle="collapse" type="button">
       <span class="sr-only">
        Toggle navigation
       </span>
       <span class="icon-bar">
       </span>
       <span class="icon-bar">
       </span>
       <span class="icon-bar">
       </span>
      </button>
     </div>
     <div class="navbar-collapse collapse" id="navbar-collapse">
      <div class="region region-navigation-collapsible">
       <nav aria-labelledby="block-bootstrap-main-menu-menu" id="block-bootstrap-main-menu" role="navigation">
        <h2 class="sr-only" id="block-bootstrap-main-menu-menu">
         Main navigation
        </h2>
        <ul class="menu menu--main nav navbar-nav">
         <li class="first">
          <a data-drupal-link-system-path="latest-news" href="/latest-news">
           Latest News
          </a>
         </li>
         <li>
          <a data-drupal-link-system-path="node" href="/node">
           Archive
          </a>
         </li>
         <li>
          <a data-drupal-link-system-path="node/2529" href="/contact-us">
           Contact Us
          </a>
         </li>
         <li class="last">
          <a data-drupal-link-system-path="node/2530" href="/about">
           About
          </a>
         </li>
        </ul>
       </nav>
       <nav aria-labelledby="block-bootstrap-account-menu-menu" id="block-bootstrap-account-menu" role="navigation">
        <h2 class="sr-only" id="block-bootstrap-account-menu-menu">
         User account menu
        </h2>
        <ul class="menu menu--account nav navbar-nav navbar-right">
         <li class="first last">
          <a data-drupal-link-system-path="user/login" href="/user/login">
           Log in
          </a>
         </li>
        </ul>
       </nav>
      </div>
     </div>
    </div>
   </header>
   <div class="main-container container-fluid js-quickedit-main-content" role="main">
    <div class="row">
     <div class="col-sm-12" role="heading">
      <div class="region region-header">
      </div>
     </div>
     <section class="col-sm-9">
      <a id="main-content">
      </a>
      <div class="region region-content">
       <h1 class="page-header">
        <span>
         Online chess is thriving through the pandemic
        </span>
       </h1>
       <article about="/how-online-chess-has-grown-due-pandemic" class="article is-promoted full clearfix" role="article">
        <div class="content">
         <div class="layout layout--onecol">
          <div class="layout__region layout__region--content">
           <div class="field field--name-field-author field--type-entity-reference field--label-hidden field--items">
            <div class="field--item">
             <a href="/node/4238" hreflang="en">
              Akhil Srinath
             </a>
            </div>
           </div>
           <div class="field field--name-field-writer- field--type-string field--label-hidden field--item">
            TechNews Writer
           </div>
           <div class="field field--name-field-pronouns- field--type-list-string field--label-inline">
            <div class="field--label">
             Pronouns
            </div>
            <div class="field--item">
             (He/Him)
            </div>
           </div>
           <div class="field field--name-field-date-published field--type-datetime field--label-hidden field--item">
            <b>
             Thu Apr 29, 2021
            </b>
           </div>
           <div class="field field--name-field-paragraphs field--type-entity-reference-revisions field--label-hidden field--items">
            <div class="field--item">
             <div class="paragraph paragraph--type--text paragraph--view-mode--default">
              <div class="layout layout--onecol">
               <div class="layout__region layout__region--content">
                <div class="field field--name-field-text field--type-text-long field--label-hidden field--item">
                 <p>
                  As the global pandemic continues to define the new normal of staying at home and working in bed with your most comfy pajamas, tens of thousands of people have been turning to online chess as their “sporting escape.” Online chess streams have been one of the most influential in terms of bringing in more people into the game. For example, U.S. Chess Grandmaster Hikaru Nakamura has taken over the Twitch chess community, where he hosts streams that feature thrilling fast-paced chess along with his engaging commentary. Similarly, Magnus Carlsen, the current world chess champion uses Youtube to stream his games which have drawn thousands of people into watching his videos and eventually learning to play the game themselves.
                 </p>
                 <p>
                  Chess.com, the most-used global chess app and website for online chess, expects a 10 years worth of growth to occur in the next few months. Their traffic has increased rapidly since the start of the pandemic, reaching close to 50 million members currently and about 9 million games being played every day. Developers and other staff have had to work overtime to maintain the servers and to cope with the traffic in general.
                 </p>
                 <p>
                  The different and newly emerging formats of the game make it an incredibly interesting and fun hobby to adopt. For instance, there is Blitz chess, the fastest format of the game, where each player has a limited time control (three minutes, five minutes, etc.) and if either player runs out of time, they automatically lose. Or Chess960, also known as Fischer Random - invented by chess legend Bobby Fischer, where the starting position and initial setup of the chess pieces are randomized. These unique formats completely disrupt the rather contentious public opinion of chess being a “dull” or “monotonous” game.
                 </p>
                 <p>
                  The COVID-19 pandemic has caused most of the in-person chess tournaments to cancel. However, the rise of online chess has given rise to a new form of competition between top-level players. Most of the traditional tournaments have adopted an online version in order to let players take part and compete, with everything from commentary to the games themselves and even the post-match presentation and prize distribution being streamed online. It is truly remarkable how the digital revolution has enabled thousands of people in the chess world to come together during these tough times and still continue enjoying their favorite hobby.
                 </p>
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="field field--name-field-body field--type-text-long field--label-hidden field--item">
            <p>
            </p>
            <p>
            </p>
           </div>
           <div class="shariff" data-css="complete" data-lang="en" data-mail-url="mailto:" data-orientation="horizontal" data-services='["twitter","facebook","googleplus"]' data-theme="grey">
           </div>
           <div class="field field--name-field-appears-in field--type-string field--label-inline">
            <div class="field--label">
             Appears in
            </div>
            <div class="field--item">
             2021 - Spring - Issue 11
            </div>
           </div>
           <div class="field field--name-field-tags field--type-entity-reference field--label-inline">
            <div class="field--label">
             Tags
            </div>
            <div class="field--items">
             <div class="field--item">
              <a href="/arts-entertainment" hreflang="en">
               Arts &amp; Entertainment
              </a>
             </div>
            </div>
           </div>
           <div class="field field--name-field-channel field--type-entity-reference field--label-inline">
            <div class="field--label">
             Channel
            </div>
            <div class="field--item">
             <a href="/news" hreflang="en">
              News
             </a>
            </div>
           </div>
           <div class="field field--name-field-tn-disqus-comment field--type-disqus-comment field--label-hidden field--item">
            <div class="form-group" id="disqus_thread">
             <noscript>
              <p>
               <a href="http://technewsiit.disqus.com/">
                View the discussion thread.
               </a>
              </p>
             </noscript>
            </div>
           </div>
          </div>
         </div>
        </div>
       </article>
      </div>
     </section>
     <aside class="col-sm-3" role="complementary">
      <div class="well well-sm region region-sidebar-second">
       <div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-searchform-2" role="search">
        <form accept-charset="UTF-8" action="/search/node" id="search-block-form" method="get">
         <div class="form-item js-form-item form-type-search js-form-type-search form-item-keys js-form-item-keys form-no-label form-group">
          <label class="control-label sr-only" for="edit-keys">
           Search
          </label>
          <div class="input-group">
           <input class="form-search form-control" data-drupal-selector="edit-keys" id="edit-keys" maxlength="128" name="keys" placeholder="Search" size="15" title="Enter the terms you wish to search for." type="search" value=""/>
           <span class="input-group-btn">
            <button class="button js-form-submit form-submit btn-primary btn-lg btn icon-only" name="" type="submit" value="Search">
             <span class="sr-only">
              Search
             </span>
             <span aria-hidden="true" class="icon glyphicon glyphicon-search">
             </span>
            </button>
           </span>
          </div>
          <div class="description help-block" id="edit-keys--description">
           Enter the terms you wish to search for.
          </div>
         </div>
         <div class="form-actions form-group js-form-wrapper form-wrapper" data-drupal-selector="edit-actions" id="edit-actions">
         </div>
        </form>
       </div>
       <section class="block block-block-content block-block-content32603d51-8a15-436f-bb64-39362a4739fb clearfix" id="block-latestdigitalissue">
        <div class="layout layout--onecol">
         <div class="layout__region layout__region--content">
          <div class="field field--name-body field--type-text-with-summary field--label-hidden field--item">
           <h2>
            <a href="https://issuu.com/technewsiit">
             Read us on Issuu!
            </a>
           </h2>
           <p>
            <iframe allowfullscreen="true" frameborder="0" src="//e.issuu.com/embed.html#2073652/66026338" style="width:100%; height:240px;">
            </iframe>
           </p>
           <p>
           </p>
          </div>
         </div>
        </div>
       </section>
       <section class="block-social-media-links block block-social-media-links-block clearfix" id="block-socialmedialinks">
        <ul class="social-media-links--platforms platforms inline horizontal">
         <li>
          <a aria-label="Follow us on Facebook!" href="https://www.facebook.com/technewsiit" target="_blank" title="Follow us on Facebook!">
           <span class="fa fa-facebook fa-4x">
           </span>
          </a>
          <br/>
          <span>
           <a href="https://www.facebook.com/technewsiit">
            Facebook
           </a>
          </span>
         </li>
         <li>
          <a aria-label="Follow us on Twitter!" href="https://www.twitter.com/realtechnewsiit" target="_blank" title="Follow us on Twitter!">
           <span class="fa fa-twitter fa-4x">
           </span>
          </a>
          <br/>
          <span>
           <a href="https://www.twitter.com/realtechnewsiit">
            Twitter
           </a>
          </span>
         </li>
         <li>
          <a href="https://www.instagram.com/technewsiit" target="_blank">
           <span class="fa fa-instagram fa-4x">
           </span>
          </a>
          <br/>
          <span>
           <a href="https://www.instagram.com/technewsiit">
            Instagram
           </a>
          </span>
         </li>
        </ul>
       </section>
      </div>
     </aside>
    </div>
   </div>
   <footer class="footer container-fluid" role="contentinfo">
    <div class="region region-footer">
     <section class="block block-block-content block-block-contentbb2445b4-3ea1-4c5a-b228-8eb5071ae0af clearfix" id="block-headimg">
      <div class="layout layout--onecol">
       <div class="layout__region layout__region--content">
        <div class="field field--name-body field--type-text-with-summary field--label-hidden field--item">
         <img alt="technewsheader" class="align-center" data-entity-type="file" data-entity-uuid="09f40be2-3739-410a-8c63-ae81167f32bb" src="/sites/default/files/inline-images/TechNews_5.png" style="max-width: 100%;"/>
         <p>
         </p>
        </div>
       </div>
      </div>
     </section>
    </div>
   </footer>
  </div>
  <script data-drupal-selector="drupal-settings-json" type="application/json">
   {"path":{"baseUrl":"\\/","scriptPath":null,"pathPrefix":"","currentPath":"node\\/4526","currentPathIsAdmin":false,"isFront":false,"currentLanguage":"en","currentQuery":{"Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"GET","Access-Control-Allow-Origin":"*","Access-Control-Max-Age":"3600","User-Agent":"Mozilla\\/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko\\/20100101 Firefox\\/52.0"}},"pluralDelimiter":"\u0003","cookieconsent":{"message":"TechNews uses cookies to gain insight on article views to see what content users tend to enjoy most","dismiss":"Accept","learnMore":"More info","link":"","path":"\\/","expiry":365,"target":"_self","domain":".www.technewsiit.com","markup":"\u003Cdiv class=\u0022cc_banner cc_container cc_container--open\u0022\u003E\\n    \u003Ca href=\u0022#null\u0022 data-cc-event=\u0022click:dismiss\u0022 target=\u0022_blank\u0022 class=\u0022cc_btn cc_btn_accept_all\u0022\u003EAccept\u003C\\/a\u003E\\n    \u003Cp class=\u0022cc_message\u0022\u003ETechNews uses cookies to gain insight on article views to see what content users tend to enjoy most \u003Ca data-cc-if=\u0022options.link\u0022 target=\u0022_self\u0022 class=\u0022cc_more_info\u0022 href=\u0022\u0022\u003EMore info\u003C\\/a\u003E\u003C\\/p\u003E\\n    \u003Ca class=\u0022cc_logo\u0022 target=\u0022_blank\u0022 href=\u0022http:\\/\\/silktide.com\\/cookieconsent\u0022\u003ECookie Consent plugin for the EU cookie law\u003C\\/a\u003E\\n\u003C\\/div\u003E\\n","container":null,"theme":false},"google_analytics":{"trackOutbound":true,"trackMailto":true,"trackDownload":true,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"},"bootstrap":{"forms_has_error_value_toggle":1,"modal_animation":1,"modal_backdrop":"static","modal_focus_input":1,"modal_keyboard":1,"modal_select_text":1,"modal_show":1,"modal_size":"","popover_enabled":1,"popover_animation":1,"popover_auto_close":1,"popover_container":"body","popover_content":"","popover_delay":"0","popover_html":0,"popover_placement":"right","popover_selector":"","popover_title":"TechNews","popover_trigger":"click","popover_trigger_autoclose":1},"ajaxTrustedUrl":{"\\/search\\/node":true},"disqusComments":"technewsiit","disqus":{"domain":"technewsiit","url":"https:\\/\\/www.technewsiit.com\\/how-online-chess-has-grown-due-pandemic","title":"Online chess is thriving through the pandemic","identifier":"node\\/4526","disable_mobile":false,"callbacks":{"onNewComment":["Drupal.disqus.disqusTrackNewComment"]}},"user":{"uid":0,"permissionsHash":"af14fda12426ce8e73511c0319dbca10312da06136e745876400ac5095d49ded"}}
  </script>
  <script src="/sites/default/files/js/js_fiovAkF_wOxElYfxQRVKjE_KkiO5FUggMfLzghdJv4o.js">
  </script>
  <script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js">
  </script>
  <script src="/sites/default/files/js/js_OF_8YWCwWBk8PfV0FrE6aeXg1wSJWfg9Qf6tU24T6m4.js">
  </script>
 </body>
`;
  console.log(props);
  // console.log(webpage.data);
  const handleRoleButtons = () => {
    if (props.role === "faculty")
      return (
        <View style={{ flexDirection: "column", width: "100%" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => props.navigation.navigate("AssignmentsScreen")}
            >
              <Text style={THEME.TEXT.T5}>Quiz Data</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => {
                props.navigation.navigate("MessagesScreen");
              }}
            >
              <Text style={THEME.TEXT.T5}>Messages</Text>
              <Avatar.Icon
                size={25}
                backgroundColor="transparent"
                icon="android-messages"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              style={[styles.homeButton, { padding: 0 }]}
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            >
              <Avatar.Icon
                icon="cog-outline"
                size={32}
                backgroundColor="transparent"
                style={{ alignSelf: "center" }}
              ></Avatar.Icon>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.quizButton, { padding: 0 }]}
              onPress={() => {
                props.navigation.navigate("UploadQuiz");
              }}
            >
              <Text style={THEME.TEXT.T5}>Upload Quiz</Text>
              <Avatar.Icon
                size={25}
                backgroundColor="transparent"
                icon="upload"
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    else if (props.role === "admin")
      return (
        <View style={{ flexDirection: "column", width: "100%" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              style={[
                styles.homeButton,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  width: width * 0.3,
                },
              ]}
            >
              <Text style={[THEME.TEXT.T5, { textAlign: "center" }]}>
                Manage Institutions
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.homeButton,
                {
                  paddingHorizontal: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  width: width * 0.3,
                },
              ]}
              onPress={() => {
                props.navigation.navigate("MessagesScreen");
              }}
            >
              <Text style={[THEME.TEXT.T5, { textAlign: "center" }]}>
                Messages
              </Text>
              <Avatar.Icon
                size={25}
                backgroundColor="transparent"
                icon="android-messages"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              style={[
                styles.homeButton,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  width: width * 0.3,
                  backgroundColor: THEME.COLORS.GREEN,
                },
              ]}
            >
              <Text style={[THEME.TEXT.T5, { textAlign: "center" }]}>
                Manage Accounts
              </Text>
            </TouchableOpacity>
            <View
              style={{ marginHorizontal: 5, padding: 7.5, width: width * 0.3 }}
            ></View>
          </View>
        </View>
      );
    else
      return (
        <View style={{ flexDirection: "column", width: "100%" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => props.navigation.navigate("AssignmentsScreen")}
            >
              <Text style={THEME.TEXT.T5}>Assignments</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => {
                props.navigation.navigate("MessagesScreen");
              }}
            >
              <Text style={THEME.TEXT.T5}>Messages</Text>
              <Avatar.Icon
                size={25}
                backgroundColor="transparent"
                icon="android-messages"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              style={[styles.homeButton, { padding: 0 }]}
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            >
              <Avatar.Icon
                icon="cog-outline"
                size={32}
                backgroundColor="transparent"
                style={{ alignSelf: "center" }}
              ></Avatar.Icon>
            </TouchableOpacity>
            <View
              style={{ marginHorizontal: 5, padding: 7.5, width: width * 0.3 }}
            ></View>
          </View>
        </View>
      );
  };
  return (
    <View style={styles.container}>
      {handleRoleButtons()}

      <View
        styles={{ flexDirection: "row", marginTop: 20 }}
        width={width}
        height={height * 0.45}
      >
        {props.role === "admin" ? (
          <>
            
            <View style={{width:width*.8, flex:1, alignItems:"flex-start", justifyContent:"center", alignSelf:'center', marginTop:30, flexDirection:"row"}} >
            <Avatar.Icon style={{backgroundColor:'transparent', top:20, borderWidth:1, borderColor:'white', marginHorizontal:15}} icon='magnify' color={THEME.COLORS.GREEN} size={40}></Avatar.Icon>
            <TextInput
            style={{
              width: width * 0.6,
              height: 45,
  
              backgroundColor:"transparent",
              color:"white",
              borderColor:'white',
              borderWidth:1, 
              borderRadius: 10,
              top:20,
              borderTopLeftRadius:10,
              borderTopRightRadius:10

            
            }}
            theme={inputTheme}
            fontColor='white'
            placeholderTextColor='white'
            color="white"
            placeholder="Institutions"
            
          ></TextInput>
          
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                margin: 20,
              }}
            >
              <Text style={THEME.TEXT.T8}>Announcements</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginTop: 10,
              }}
              width={width}
              alignSelf="center"
            >
              <ScrollView style={{ height: height * 0.4, width: width }}>

                <Text style={{ textAlign: "left", flexShrink: 1 }}>
                  <View
                    style={{
                      width: "100%",
                      height: "auto",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        width: width * 0.6,
                        // textAlign: "left",

                        padding: 15,
                        flexWrap: "wrap-reverse",
                        color: "white",
                        alignSelf: "center",
                        textAlignVertical: "auto",
                        textAlign: "center",
                      }}
                    >
                      <HTML source={{ html: htmlContent }} contentWidth={width} />
                      {/*{" "}*/}
                      {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                      {/*Nam accumsan nulla quis dapibus ultricies. Duis lacinia*/}
                      {/*feugiat lacus, eleifend blandit sapien consequat et.*/}
                      {/*Pellentesque in congue risus, auctor suscipit purus. Fusce*/}
                      {/*pulvinar metus tempor velit lacinia euismod. Integer sit*/}
                      {/*amet magna ut urna commodo rhoncus. Nullam rutrum elit et*/}
                      {/*velit scelerisque tempor. Aenean vulputate consequat*/}
                      {/*facilisis. Fusce pellentesque pretium ligula et semper.*/}
                      {/*Cras sit amet volutpat sem. Integer malesuada tortor quam,*/}
                      {/*id convallis tortor consequat in. Vivamus pretium*/}
                      {/*tincidunt dui ut tincidunt. Donec vitae turpis in dolor*/}
                      {/*finibus dictum. Donec sed eros at lacus rutrum sodales.*/}
                      {/*Sed sed aliquet libero. Mauris suscipit est eget purus*/}
                      {/*consectetur accumsan. Sed vel turpis nec nisi vehicula*/}
                      {/*sagittis. Nunc interdum lacus at interdum fermentum.*/}
                      {/*Pellentesque rhoncus suscipit nisi at fermentum. Duis*/}
                      {/*dictum bibendum metus, et mollis odio tristique feugiat.*/}
                      {/*Suspendisse euismod sapien lectus, ac congue lectus congue*/}
                      {/*tincidunt. Integer commodo iaculis sapien in iaculis.*/}
                      {/*Aliquam id urna ac justo aliquam blandit. Ut erat lorem,*/}
                      {/*sagittis eu quam eget, scelerisque tristique nunc. Morbi*/}
                      {/*ornare pharetra auctor. In urna nulla, interdum a maximus*/}
                      {/*a, facilisis vitae ex. Vestibulum ex lorem, tempor a*/}
                      {/*placerat et, bibendum vitae ipsum. Nunc malesuada quam*/}
                      {/*vitae fringilla ullamcorper. Vestibulum dictum velit.*/}
                    </Text>
                    <Image
                      style={{
                        width: 128,
                        height: 128,
                        resizeMode: "contain",
                        marginVertical: 15,

                        flexWrap: "wrap",
                        top: 75,
                      }}
                      source={require("./../../images/Logo.png")}
                    ></Image>
                  </View>

            {/*      /!* <ScrollView style={{ height: height * 0.4, marginBottom: 15 }}>*/}
            {/*  <View*/}
            {/*    style={{*/}
            {/*      flex: 1,*/}
            {/*      flexDirection: "row",*/}
            {/*      width: width * 0.75,*/}
            {/*      bottom: 20,*/}
            {/*      flexWrap: "wrap",*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <Image*/}
            {/*      source={require("./../../images/Logo.png")}*/}
            {/*      style={{*/}
            {/*        width: 128,*/}
            {/*        height: 128,*/}
            {/*        left: 15,*/}
            {/*        marginVertical: 15,*/}
            {/*      }}*/}
            {/*    ></Image>*/}

            {/*    <Text*/}
            {/*      style={{*/}
            {/*        bottom: 20,*/}
            {/*        flexShrink: 1,*/}
            {/*        minWidth: 100,*/}
            {/*        marginHorizontal: 10,*/}
            {/*        color: "white",*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam*/}
            {/*      accumsan nulla quis dapibus ultricies. Duis lacinia feugiat*/}
            {/*      lacus, eleifend blandit sapien consequat et. Pellentesque in*/}
            {/*      congue risus, auctor suscipit purus. Fusce pulvinar metus*/}
            {/*      tempor velit lacinia euismod. Integer sit amet magna ut urna*/}
            {/*      commodo rhoncus. Nullam rutrum elit et velit scelerisque*/}
            {/*      tempor. Aenean vulputate consequat facilisis. Fusce*/}
            {/*      pellentesque pretium ligula et semper. Cras sit amet volutpat*/}
            {/*      sem. Integer malesuada tortor quam, id convallis tortor*/}
            {/*      consequat in. Vivamus pretium tincidunt dui ut tincidunt.*/}
            {/*      Donec vitae turpis in dolor finibus dictum. Donec sed eros at*/}
            {/*      lacus rutrum sodales. Sed sed aliquet libero. Mauris suscipit*/}
            {/*      est eget purus consectetur accumsan. Sed vel turpis nec nisi*/}
            {/*      vehicula sagittis. Nunc interdum lacus at interdum fermentum.*/}
            {/*      Pellentesque rhoncus suscipit nisi at fermentum. Duis dictum*/}
            {/*      bibendum metus, et mollis odio tristique feugiat. Suspendisse*/}
            {/*      euismod sapien lectus, ac congue lectus congue tincidunt.*/}
            {/*      Integer commodo iaculis sapien in iaculis. Aliquam id urna ac*/}
            {/*      justo aliquam blandit. Ut erat lorem, sagittis eu quam eget,*/}
            {/*      scelerisque tristique nunc. Morbi ornare pharetra auctor. In*/}
            {/*      urna nulla, interdum a maximus a, facilisis vitae ex.*/}
            {/*      Vestibulum ex lorem, tempor a placerat et, bibendum vitae*/}
            {/*      ipsum. Nunc malesuada quam vitae fringilla ullamcorper.*/}
            {/*      Vestibulum dictum velit.*/}
            {/*    </Text>*/}
            {/*  </View>*/}
            {/*</ScrollView> *!/*/}
                </Text>
              </ScrollView>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  homeButton: {
    backgroundColor: THEME.COLORS.BLUE,
    marginHorizontal: 5,
    marginVertical: "2.5%",
    width: width * 0.3,
    padding: 5,
    borderRadius: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },

  quizButton: {
    backgroundColor: THEME.COLORS.GREEN,
    marginHorizontal: 5,
    marginVertical: "2.5%",
    width: width * 0.3,
    padding: 5,
    borderRadius: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default HomeScreen;
