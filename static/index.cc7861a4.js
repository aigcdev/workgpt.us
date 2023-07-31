import{f as d,i as j,g as Y,h as k,j as E,r as F,l as R,k as M,m as C,n as J,P as I,q as P,s as f,T as N,v as S,x as G,S as X,y as K,L as Z,z as Q,o as u,c,a as t,b as l,w as g,d as q,t as A,A as x,B as H,F as y,p as z,e as B,_ as m,C as w,D as L,E as W}from"./entry.caf3cf41.js";import{_ as O}from"./nuxt-link.74ae9d70.js";import{E as _}from"./el-overlay.6fd400a1.js";const $=d({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const n=await R[e.name]().then(s=>s.default||s);return()=>f(n,e.layoutProps,o.slots)}}),tt=d({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,o){const n=J(),s=j(I),i=s===Y()?k():s,a=E(()=>P(e.name)??i.meta.layout??"default"),r=F();o.expose({layoutRef:r});const v=n.deferHydration();return()=>{const h=a.value&&a.value in R,D=i.meta.layoutTransition??M;return C(N,h&&D,{default:()=>f(X,{suspensible:!0,onResolve:()=>{G(v)}},{default:()=>f(et,{layoutProps:S(o.attrs,{ref:r}),key:a.value,name:a.value,shouldProvide:!e.name,hasTransition:!!D},o.slots)})}).default()}}}),et=d({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const n=e.name;return e.shouldProvide&&K(Z,{isCurrent:s=>n===(s.meta.layout??"default")}),()=>{var s,i;return!n||typeof n=="string"&&!(n in R)?(i=(s=o.slots).default)==null?void 0:i.call(s):f($,{key:n,layoutProps:e.layoutProps,name:n},o.slots)}}}),ot=""+new URL("intro.3b1ee9cc.png",import.meta.url).href,V=e=>(z("data-v-ae14c454"),e=e(),B(),e),st={id:"product",class:"intro-container"},nt=V(()=>t("div",{class:"title"},A(`Customized 
ChatGPT 
for your work`),-1)),at=V(()=>t("div",{class:"intro"}," Chat with your private APl, tools, data. ",-1)),it={class:"operation"},rt={class:"pc"},lt={class:"mobile"},At={class:"tips"},ut=V(()=>t("iframe",{style:{border:"none"},width:"100%",height:"520px",src:"https://cdn.forms-content.sg-form.com/711331c4-2e0b-11ee-8bb3-da3b37abf17b"},null,-1)),ct=d({__name:"Intro",setup(e){const o=F(!1);return(n,s)=>{const i=O,a=_,r=Q("lazy");return u(),c(y,null,[t("header",st,[t("div",null,[nt,at,t("div",it,[t("div",rt,[l(i,{to:"https://chat.workgpt.us/register"},{default:g(()=>[q(" Try it now - It’s free ")]),_:1}),l(i,{onClick:s[0]||(s[0]=v=>o.value=!0)},{default:g(()=>[q(" Schedule for Demo ")]),_:1})]),t("div",lt,[l(i,{to:""},{default:g(()=>[q(" Try it now - it’s free ")]),_:1})])]),t("div",At,A(`Get started for free, 
no credit card required.`),1)]),x(t("img",null,null,512),[[r,P(ot)]])]),l(a,{modelValue:P(o),"onUpdate:modelValue":s[1]||(s[1]=v=>H(o)?o.value=v:null),"destroy-on-close":""},{default:g(()=>[ut]),_:1},8,["modelValue"])],64)}}});const pt=m(ct,[["__scopeId","data-v-ae14c454"]]),dt={class:"title-container"},gt={class:"title"},vt={class:"sub-title"},mt=d({__name:"Title",props:{title:{},subTitle:{}},setup(e){return(o,n)=>(u(),c("div",dt,[t("div",gt,A(o.title),1),t("div",vt,A(o.subTitle),1)]))}});const b=m(mt,[["__scopeId","data-v-1633feea"]]),ht=""+new URL("evaluation_1.642851de.png",import.meta.url).href,qt=""+new URL("evaluation_2.7edca52a.png",import.meta.url).href,ft=""+new URL("evaluation_3.65bd0a58.png",import.meta.url).href,yt={id:"features",class:"evaluation-container"},Tt={class:"title"},Pt={class:"sub-title"},wt={class:"intro"},Rt=d({__name:"Evaluation",setup(e){const o=[{title:`Chat with 
your APIs/Services`,subTitle:"API integration made easy.",intro:"Seamlessly integrate with your own internal data and query any data anytime, without the need for programmer support. Execute requested tasks and return the results.",imagePath:ht,textContentMaxWidth:480},{title:`Customize any role 
with your own data`,subTitle:"Effortless AI role customization.",intro:`No coding expertise required, just by Chatting! 
Create and distribute your own AI Role understanding your internal data effortlessly.`,imagePath:qt,textContentMaxWidth:500},{title:`Autonomous 
AI Agent`,subTitle:"Multi-agent AI system.",intro:"Run multiple AI Agents at once, operating concurrently to bolster your business processes and optimize your workflow.",imagePath:ft,textContentMaxWidth:500}];return(n,s)=>{const i=Q("lazy");return u(),c("section",yt,[l(b,{title:"How It Works","sub-title":"Your all-in-one problem solving chatbot."}),(u(),c(y,null,w(o,(a,r)=>t("div",{key:r,class:"content"},[x(t("img",null,null,512),[[i,a.imagePath]]),t("div",{style:L(`max-width: ${a.textContentMaxWidth}px`)},[t("div",Tt,A(a.title),1),t("div",Pt,A(a.subTitle),1),t("div",wt,A(a.intro),1)],4)])),64))])}}});const Qt=m(Rt,[["__scopeId","data-v-bd63e254"]]),U=""+new URL("icon_1.1413e82c.png",import.meta.url).href,T="data:image/png;base64,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",p=""+new URL("icon_3.6e3a7aaf.png",import.meta.url).href,xt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAAnFBMVEUAAAApqeAqqeAqqd8jn9Epqd8pqeApqeAqqeAqqeApqeAnquEmp+ElrOUop94qqeApqd8lp98pqeAqqeApqeApqeApqeApqeApqeApqeApqeApqeApqeApqeApqeAqqeAsqt8pqeApqeApqOEoqeEoq+EnqN8pqeAqqeApqeEpqeAqqOEqqOAqqeApquEpqeAmpuArq94pp+IqqeBtUkmsAAAAM3RSTlMA/fv5Bh/s4Oj1SiURCS7xxA2ymeTMt2HZ06SKfHFsZxarUT0ZMyqOgndXvUWfklsiOkG1M4AlAAADWUlEQVRo3uzW2XLaMBiG4U+W9wUbsznGmB0cQkI7//3fW4cMmSFEW1u1kwM/F+BP0nti9Hq9Xq/X+64yL0m8If4H77Kucu44PArK1sM/5Z5rn+6E0437cPHLALYk64ge8HKAO3ExTiGzSX+r2NIngbz5qLhrC8YayKzCUQZjw7lDQmyUAkjjt4ARBfKcDbG5+dqIk0wZt3WVv0+3kEkDImcBM+4bKTC6mcrzbB0iylsXJk6MDIw9SD3TFV+Y7A18MhDscZVCpKbbXgat0uhuMYBsO2+F7Qu6eU2hsWWkVx2uW09RsYLALqAPUw9Kbk1abDLrpvntRQW88O5gG3W5kIxFZ2jnKFcGXJIx3kJsF3x+iz2k1n+/hnRCn/hdColKXEuwtpD3/3LmagmhjJOZ/AK5jr4oYldUmcwEMRTOgkPzl+UQj/ZkpPCgshqTgPPU7P5sbgm1oyxBOUtwJ7Ezd4hIwgnKxT7DTcqszOFIciyq1s1psEszuIGdOU/7HSeclK/HkAywC3ROEVnDNtB6dsgWZwsVNwGAkbU9nmj+B+YHwD1yssNfQeXAiRfd+dBZ6lcNoeKN3wNz3yErChcqwwlZVUNtRFY1UJsxssiJofbDJ4vGHjTWZNELdH4ysqeDVk3WsC20kl/t1dtygjAQBuANhBBAEUWgiAc8F09F9/3freN9p91kc9MZvhf45082G42uhBL+VkXoSA4USw+diHZAIR39CMUBSGTjI59ogKrSyKZSIEsXE/56NiBfZYQc3o6eBW/tJhNobTYFqvi6ODf5rFasV0AWfCDTuxzdp4t1SXeYs8fSyFIgh07ByHTLyqvA0KlGe9kITN1CzlGae9n28yqwkWZo5Q52pp0SaEpcR2ArvRsHzgNgCFbFRJikPYGpva1yjTQqBr6gRJrIQZq8hNRuF2B7loJ6b/xup9xHovAITPutQqoyAI5x0hUCqaJmzIhKL+dsgnS1+ZDEm10cx7uqy8ta+2him4Cx6apGG6KIJdhIHgqNhcsR2Do+NJrwwmUCHKdz7SGiQAJRdz1w9dWVNJRqVrXgRN9d9a/9fF2uDuCOTNf3Qnk/ZApPZ4+vBJwbt/t1Xn6oyPfe/GgyL2ZNlbYSCBixQZIk/WEkYTAYDAaD/+kblRxEH1IZyaAAAAAASUVORK5CYII=",Ot="data:image/png;base64,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",Vt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAA1VBMVEUAAAD/ZAD/ZgD/ZQD/ZQD/ZgD/ZgD/ZgD/YAD/ZgD/aAD/ZQD/ZQD/ZgD1aRD/ZAD/ZQD/cADzahH6Zwf/ZgD/YAD1aQ73aAz4Zwr/ZQD/agD/ZgD/ZgD/ZgD//////v3/ZAD/YgH+ZgD/jEr/uo3/omf/n2X/xZ7/1Lj/rXf/rYD//Pr/fi3/bxT/6tz/yKb/7eL/aQj/4c7/+vf/gzXyaxL/+PT/8Ob/l1b/m13/cRn/8+v/q3b/soD/jEP/eCT/toj/pW3/k03/dR7/1bv/1br/0LIPseOYAAAAHXRSTlMAIL/vb9+fjxDPQDBgX99/PxDvn1Awz7+vTzCAf/Y7nEYAAAOqSURBVGjezdrpUtswFAVgS3ZiOwthK1t7sSBQloTFIZCVrbR9/0dqZspxwHasJL4WOb9AGvhG8pUmkWWtdKq1xtbe2trm/SSbazu7W43tqlVINmqub1NapLu9wWuJ75IyIx3BNi4HVmb8OodYKds0b8oiLyZpociKKQygWPaZlUkTzil1bFoyJWfx0peUIyVhZmiI7Szy1FzKHXf+ifQJMTCh1RKROa9qE1Psql6rEWPqDBqjVyXmZM6nsAkx8PyEpiaZ6xMaa3xvhuYyIvr9xaGC4pgpE8QWZh4cIg1NJeJo1gBz7Hh1lqnQlGODo4JT+cRJ0oS1WipUeCpmBofI+JNTH0OxpPR9bFGU8QcYXqwsuxfIryTXjzrbaHqKmvpJ7mqMzmcUZ6wsTwPk7IhiOToPkJ/gTgLkoZvg2i10NmNrrwbu8D3pHDqnXNQU/AmTHPqasa3FX55DW2ugtJzEXObg0DgaajkS2JzzcPgTpeUaWHQMXOspm8NsepSPQ3PnSseRN+G2mbjWWMvVJ5ybl0N7r6s0nItHl4tDx99Qw/kT7piNC/oqm7Mt64CBQ8/1MJs7nlQKI4fFl8E1ODh0PTSVhtvKw0F5wE+dUMPtMnDXL0Hw/r8fNdxOOqdiyeaGHfw4amdza2ncw20id1ncVRfdwXmYyW3GOF3SOTqJpnOgsrh7Hu6qM/3FAKf6+CU4McCROo+WRVcZ4Lq96eIrvFSIwseoWl7VYgshLTpOTavl9nkx7vomkV6g4Ug1o8V3pmZxe7l3FXCkbtBwNyhwiwZHw2m1DGdwDUZO9aPpfJnB1Rg5Cm9QnXen6dwBJ6faIyyGUZDKWZwcqQsM73AG53Ny2KoRcNNP7S4rR093kZf6sbbGy6mzIJjF7U84j5ejt95MzsMXLkZODTC81C9c1g9ejsLf8GKcgy/LrBx1W+mcwJkRL6cegyCF83Fyys29ddI4vDHxbC4OwVb9iRPRIRU3RzdJrmwhFXau3QvinLCiyHxnYklOjdEHTsaPT1X3Ekk58RtEnW00NdHyGlI84fgS+X/it544HJ4airgjLaOnw+KrDvax9gpMSXzJSxkzp+2lr3+hVuDrwlV4GWp5PhWQ0qq8yMb1CtYyMXoJ4dsqXbFg9upGr8doZpK3PkvQjHi+0DCs+4vrreq1NP2E8l9jdEpmhoaIZS9M4qmZuMYo163lsy65MP4ptcvAcoE1f66BOZ7FFOFIjdUQFmu8fVcep8Z36/OO6x9B5Fh4A6Hk3wAAAABJRU5ErkJggg==",Dt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAABUFBMVEUAAAD7vAL///4YZ9LqQzUyp1Hu9P7s9u/++egXfzY9gfE+g+c/olHpthT6swfrQjTUKirqQjTqQjQXgDfqQzQqd7zqQzQXfzdBhPTqQzXrQzMXfzcYZ9HoQTPqQzVBhfQYZ9FBhPPu7+n6swbh7/Du8t7qQzXrQjRChfQYZ9EYZtAYZtJChPRChfMXgDcYfzdBhfMYfzhBhfMYZtEWfjYXZdFAg/AXZ9FChfT///80qFP7vAMYgDgZZ9L+/v7qQzVChPRAg/RBhPT9/f7t9P5IiPTT4vxGh/TN3/zz9/5Rj/VLi/Tf6v240fv5+/5zpfdpnvZblfXqQjT2+f7o8P3c6P3D2Pyvy/r7/P7u9P280/t6qfc+gvLK3fumxfqewfmRuPiJs/ihw/mFsPfv9P3k7f3X5fy/1vuVufljmvVWkfXh7P3T4/y0zvqnxvmYvPm7Rv74AAAAOHRSTlMA/v7+/v7+/v7+/v7+/v7+Bn7z/XoS8+voeWlM1W9uZGRS/v79/fPz8fHq59XV1dStraysZ05EQ9wTW0oAAAOlSURBVGje7dhX05NAFAZgNPhp7L333nvBdgy7X0IoAWJ6Ypq9+//vPLsYN4o4I8PB0eG9gtlMntl6AO1vZM+Jm/srFSOjsI2l0uMfUipdunV8z0K7e4UJjIJTYOnwnUg7dp4ZGCJOgRePC+3EftToOQQv3MN5u1wxaDnlHcahRI2YU56mXTdy5fazXDmDfjBVNK1Sybd3Ro69K7iCK7iCK7h/kaukDXJJSeYqzEybVJz5YTVdVk5uScrvuBVIl7Ub1iTl99z9VBHcw1+n4Aqu4P6UAwBqTkl9e7C6YvvwCxSiZMYB2L3gvVt1nfDtaz/mAf84Ho9fQkYc9HuOwRZ1Kfjwowdgz7Gh+jEjDlov0FJxh8se5/UmE1wtG477c6mpWEMOqmvTqmFkx8H9idSY6TquGcFNjy+0ToD3WXIdpyK0sNsetGuziH4LILH+J4dlzE1NAQQ2BwAOn6Lpa8nGwQyvs+V4Z4ZLwVn9hvfnovWZ+G/wQiZ/miUHwNuN8PNicUBdckPBvXLkyDa/VLPjJNjvf7/pSK4hON7DcTZHXt3KiIuHjyVX54LmAXN6wOk44HO5p22Iuhp0gIwD1N64ovEFRBy08IKCA+77vu19kYvjvbfURsLxN6PRKHSjXdfl96m554vjgzlDDvlx1mtQLfQcc3s+z4VjZgS+GADQcuB1u93GNGRMNM45NRfFbriyHPVoOaV2qrLA2qScCp/KU6wLZBxglibxmRjNCSfiAPzXtSXuJRPcjIYTq2NkvWt993hb9u4tEVd/J2676lGvYQruM5BwvGZEKxEiDFabYidYYxoO7FDcsqCNNQgAXgUG6UaAocVkjZvUPK8+jZ4rzQlQcf7MkDEtx7XMqDFskR3RMAjYj22sSVfN429ALPRI6x34w3dMlbtJC37mTNO0suLkXn8zcgwknaD3Mvb22m6IrGT4bo4it1+1bS4u4w+fIvBvf+gouIL7fzmWFHOwNl1++2F/U2JOr0+ZM6e2JkTTyolZlzabt+m/zNOdmvYoKeV1D1IGuSfx6PrOg/Sc0vbu3p4ndxQ1ak6N5A7EcuJwmRzYTs4pTd+BWn4cauScmjccybw4/anqGz2Hq0Rp5Jz+ZO8RhVFzeE4e3J4bp+tn8eTKj3uKJ1dOnDq56Dmp6Yv9prKrTMSpHbCcfWRcXMPcoOFw3nBNxnOIhFvUgFj2XCXglBbv3r5dmXPq5IrnNnrZcouTK6F/18q7ylly53YnaF8BvpWev7j3ah8AAAAASUVORK5CYII=",Ut="data:image/png;base64,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",Ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAAkFBMVEUAAABkYv9kYv9eXv9lY/9kYv9mZv9kYv9kY/9lY/9lYv9lY/9lY/9lYv9kY/9lY/9kYv9lYv9lY/9kYv9lY/9lYv9lYv9kYv9jYv9lY/9kY/9kYv9jYv9kYf9lY/9lYv9kYv9jY/9kYv9lY/9kYv9kYv9jYv9jYP9iX/9iYv9kYv9iYv9kYv9jY/9kYf9lY//XoslhAAAAL3RSTlMAqn8O7UkHVnT73NfImlv4eLThiNTQhGQ38sWuQzLnzHEKvJ+VbDwrFB5QGIwpJaKFHj0AAAOLSURBVGje7ZrZcqJAFIbbZt8XAdlBNuOSnPd/u0k5gxjHxF4IM6nyKy+8oT7opk//HEBPnjx58u8Q3qSNGllZY4ZBEKZN1kbuRnoT0PzEuE1FDe4hmpabz+eU43XowAO0YB0jfraS5QAhYivJfLOFDaBCd/fMsv0pAWq07sgke1EdYCJZMwxpUQEzQUFr2yTAgdPT2TDcRdSrrMP1xlYUe9PjLksDEe4S0djcOzOycpWdcGel7BSc3XGq5Lb8dmxMNX9QCXrz1icRrzYfrtHxC9GdXFcfD9uyDGUjIWKkFK5YE9Yt/+oUD4iKXIcLPtnlDVOFaKkL/bGbfGSrr78aDgbWlDenBX8w2faryz1qIRJW08UxcRqPX9HpTJlJZ1LqeOeOVQedQD1zLbDroMzpbAcDWHQTJk1V8QAYdROVSlYzsQ7ApZuM9SB/XbxUUwPg1k2IHr673wk7xV05MMGvm5xG6lm4/72b17jLTF2EEWYdFU8dke6klvSO0u0YdRghJdOoAnSmIISZde+8uSGpLKx3CHHpzhw3jfPwuprN+OzDoZuCpOsFyScmvXHHWMKvm3iJ7TpqvTQ0DCMwjDD1rKi247Gi8uvI+NE62zPS+riEbsoexnEZnQ2/yZbRNWOAFxbRXcrmsIjuUsJeF9G54+PTt8+ddS6Y/vm/Q57/WkadeC7we08DMA7EtleRUQf+Dp2FeSGT23z28CCqiBLb4coqjUQjiyvuaFQdCBf41k5nSWJl97gtKkinZL7gVzZq/Lly56bl7DlTM1ZYkYrj1fZeSLa7CpxvjbWa6OuBoZfJz07RC+uqkkXiB4w6LNQGrSzsX3g2oKJNyF1iW/AnsYPlk7j09jBXzhywJ36lcjJ12M4aa+VYiTw9+WsN6t7aHr4tRcv7OD8otvL+O+TFXv7xoV0u7FxeTPcavP8V+4V0ex/O2MvounHHW0YXLJuiLxUlXkS3WuwJKELvSNqY4EmJ6HTWx8Z+dPaZArGO8rWFetPYH6w027A09nuyKDxXY3+geKHG39j3txTDwd/YVxEZW32Oxr4vEJ8l3FD19I39ARFT8zf2XUQB5m3su4iKXgMOHBVRsgvYbVWBqJEjkfXSBMTC8eTQy5ITx/c4qk4nMyIBcSFZJfEoWtIW8VNEofZQFa5jGc3FNsdeJX7y7Gx4mKCEsH90l4ZhEJrNyorq80d3T548+Y/5BXYucjirSdmZAAAAAElFTkSuQmCC",zt="data:image/png;base64,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",Bt={id:"useCases",class:"use-cases-container"},bt={class:"content"},jt={class:"icon-list"},Yt={class:"title"},kt={class:"intro"},Et={class:"time"},Mt=d({__name:"UseCases",setup(e){const o=[{iconPathList:[U,T,p],title:"Email Scraper",intro:"Scrape all the emails on the website and sync to Google Sheet.",time:"15 min",to:"https://sites.google.com/shopflex.io/workgpt/scraping-email-address-to-google-sheet"},{iconPathList:[xt,Ot,p],title:"Twitter Manager",intro:"Post the news with tags to Twitter everyday 10am.",time:"30 min",to:"https://sites.google.com/shopflex.io/workgpt/automating-twitter-posts-with-daily-hot-news-using-workgpt"},{iconPathList:[Vt,T,p],title:"News Agent",intro:"Get hacker news and put result in a Google Sheet table.",time:"10 min",to:"https://sites.google.com/shopflex.io/workgpt/extract-news-source-link-and-send-to-email"},{iconPathList:[Dt,Ut,p],title:"Meeting Reminder",intro:"Send email with the today’s meeting link.",time:"3 min",to:"https://sites.google.com/shopflex.io/workgpt/schedule-meeting-to-google-calendar"},{iconPathList:[Ft,p],title:"Database Agent",intro:"Check the number of user registered in 2023.",time:"1 hour",to:"https://sites.google.com/shopflex.io/workgpt/automate-customer-inquiry-responses-via-internal-service-api"},{iconPathList:[U,p],title:"Blog Manager",intro:"Generate blog and post it to my blog.",time:"40 min",to:"https://sites.google.com/shopflex.io/workgpt/create-the-draft-of-blog-post-on-given-topictheme-with-workgpt"},{iconPathList:[zt,T,p],title:"Reviewer",intro:"Get the product review from Google Search to Google Sheet.",time:"5 min",to:"https://sites.google.com/shopflex.io/workgpt/colloect-review-from-google-search-to-google-sheet"},{iconPathList:[p],title:"English Translator",intro:"Translate any content into English.",time:"40 min",to:"https://sites.google.com/shopflex.io/workgpt/translate-any-content-into-english"}];return(n,s)=>{const i=O,a=Q("lazy");return u(),c("section",Bt,[l(b,{title:"Use Cases","sub-title":"Get you started with ready use templates."}),t("div",bt,[(u(),c(y,null,w(o,(r,v)=>l(i,{key:v,to:r.to,class:"item-card"},{default:g(()=>[t("div",jt,[(u(!0),c(y,null,w(r.iconPathList,h=>(u(),c("div",{key:h,class:"icon"},[x(t("img",null,null,512),[[a,h]])]))),128))]),t("div",Yt,A(r.title),1),t("div",kt,A(r.intro),1),t("div",Et,"Save "+A(r.time),1)]),_:2},1032,["to"])),64))])])}}});const Ct=m(Mt,[["__scopeId","data-v-7f3294aa"]]);const Jt={},It=e=>(z("data-v-a9fb0c5c"),e=e(),B(),e),Nt={class:"create-account-container"},St=It(()=>t("div",{class:"title"},A(`Ready to Create 
an AI Agent?`),-1));function Gt(e,o){const n=O;return u(),c("div",Nt,[St,l(n,{class:"button",to:"https://chat.workgpt.us/register"},{default:g(()=>[q(" Create a Free Account ")]),_:1})])}const Xt=m(Jt,[["render",Gt],["__scopeId","data-v-a9fb0c5c"]]),Lt=d({__name:"index",setup(e){return(o,n)=>{const s=tt;return u(),W(s,null,{default:g(()=>[t("div",null,[l(pt),l(Qt),l(Ct),l(Xt)])]),_:1})}}});export{Lt as default};
