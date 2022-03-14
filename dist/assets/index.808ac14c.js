import{s as t,j as p,L as m,B as f,R as b,a as w,b as x,F as y}from"./vendor.c6d4a730.js";const k=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))g(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&g(s)}).observe(document,{childList:!0,subtree:!0});function d(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(n){if(n.ep)return;n.ep=!0;const o=d(n);fetch(n.href,o)}};k();const v=t.h1`
color:white;
font-size:2.5em;
font-family: 'Lato', sans-serif;
@media ${e=>e.theme.mediaQueries.mediaTablet}{
    font-size:2em;
    margin: 0;
  }

  @media ${e=>e.theme.mediaQueries.mediaCel}{
    font-size:1.9em;
    margin: 0;
  }
`,A=t.h2`
color:white;
font-size:2.2em;
font-family: 'Lato', sans-serif;
color:black;
margin:0.3em;
font-weight:600;
`,c=t.p`
color:white;
font-size:1.3em;
font-family: 'Lato', sans-serif;
@media ${e=>e.theme.mediaQueries.mediaTablet}{
    font-size: 1.45em;
    
  }

  @media ${e=>e.theme.mediaQueries.mediaCel}{
    font-size:1.05em;
  }
`,C=t.p`
color:white;
font-size:1.3em;
font-family: 'Lato', sans-serif;
@media ${e=>e.theme.mediaQueries.mediaTablet}{
    font-size:1.2em;
  }
`,i=p.exports.jsx,a=p.exports.jsxs,Q=()=>a(K,{children:[i(I,{}),a(z,{children:[i(v,{children:"Welcome to prime video"}),i(R,{children:a(c,{children:["Enjoy exclusive Amazon Originals as well as popular movies and TV shows for ",i("strong",{children:"PEN 16.99"})," /month. Watch now, cancel anytime."]})}),i(m,{to:"/hola",children:"Prime Video Member? Sign in"}),a(T,{children:[i(h,{}),i(U,{children:"or"}),i(h,{})]}),i(m,{to:"/hola",children:"Start your free trial*"}),i(L,{children:"*Cancel your trial at any time"})]})]}),z=t.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:40%;
padding-bottom:8em;
padding:2em 4em 2em 4em;
@media ${e=>e.theme.mediaQueries.mediaTablet}{
  width:55%;
  align-items:center;
text-align:center;
margin-top:-1.5em;
}
@media ${e=>e.theme.mediaQueries.mediaCel}{
  width:80%;
  align-items:center;
text-align:center;
padding:0;
}
`,L=t(c)`
font-size:1em;
`,T=t.div`
display:flex;
flex-direction:row;
width:50%;
margin:0.8em 0em 0.5em 0em;
@media ${e=>e.theme.mediaQueries.mediaTablet}{
  width:65%;
}
@media ${e=>e.theme.mediaQueries.mediaCel}{
  width:80%;
  margin:0.1em 0em 0.5em 0em;
}
`,U=t.span`
margin:0px 10px 0px 10px;
color:white;
font-size:1em;
font-family: 'Lato', sans-serif;

`,h=t.span`
color:white;
border-bottom:1px solid white;
width:50%;
font-size:1em;
margin:auto;


`,I=t.div`
@media ${e=>e.theme.mediaQueries.mediaTablet}{
background:linear-gradient(to top, #000 0%, transparent 20%), url('/src/images/backgroundcel.jpg');
width:100%;
height:570px;
background-size:cover;
background-repeat:no-repeat;
background-position:center top;
}

@media ${e=>e.theme.mediaQueries.mediaCel}{
  background:linear-gradient(to top, #000 0%, transparent 20%), url('/src/images/backgroundcel.jpg');
  width:100%;
  min-height:46vh;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center top;
  }
`,K=t.div`
background:linear-gradient(to right, #000 40%, transparent 58%),url('/src/images/background.jpg');
max-width:100%;
min-height: 70vh;
background-size:cover;
background-position: right top;
a{
  text-align:center;
  padding:1.5em;
  background:#0F79AF ;
  width:41%;
  text-decoration:none;
  color:white;
  font-size:1em;
font-family: 'Lato', sans-serif;
font-weight:600;
@media ${e=>e.theme.mediaQueries.mediaTablet}{
  width:55%;
  align-items:center;
  padding:1em;
}

@media ${e=>e.theme.mediaQueries.mediaCel}{
  width:70%;
  align-items:center;
  padding:1em;
  margin:0;
  font-size:1em;
}
}


@media ${e=>e.theme.mediaQueries.mediaTablet}{
  background-image:none;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:#000;
  
  height:100vh
}

@media ${e=>e.theme.mediaQueries.mediaCel}{
  background-image:none;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:#000;
  height:100vh
 
}
`,R=t.div``;var V="/amazonprimeclone/assets/screen.ed436401.png";const l=({img:e,sub:r,p:d})=>a(E,{children:[i(H,{src:e}),i(A,{children:r}),i(j,{children:d})]}),E=t.div`
display:flex;
flex-direction:column;
width:30%;
align-items:center;
justify-content:center;
text-align:center;

@media ${e=>e.theme.mediaQueries.mediaTablet}{
  width:90%;
  margin: 1em 1em 1em 1em;
  }

@media ${e=>e.theme.mediaQueries.mediaCel}{
    width:90%;
    margin: 1em 1em 1em 1em;
    }
`,j=t(c)`
color:black;
font-size:1.45em;
margin:0;
@media ${e=>e.theme.mediaQueries.mediaTablet}{
  text-align:center;
   }
@media ${e=>e.theme.mediaQueries.mediaCel}{
   text-align:center;
    }
`,H=t.img`
width:23vw;
height:23vw;
margin:0;
@media ${e=>e.theme.mediaQueries.mediaTablet}{
  width:45vw;
  height:45vw;
  }
@media ${e=>e.theme.mediaQueries.mediaCel}{
    width:85vw;
    height:85vw;
    }
`,P=()=>a(N,{children:[i(W,{}),i(S,{children:a(M,{children:[i(O,{}),i(u,{children:"EN"}),i(u,{children:"Sign In"})]})})]}),N=t.div`
display:flex;
flex-direction:row;
padding:1em;
justify-content:center;
background:#0f171e;
background-image:linear-gradient(180deg,#1b2530 0,rgba(27,37,48,.85));
@media ${e=>e.theme.mediaQueries.mediaTablet}{
 
}
@media ${e=>e.theme.mediaQueries.mediaCel}{
  padding:1.1em;
}

`,S=t.div`
justify-content: flex-end;
width: 100%;
display: flex;
`,u=t.button`
background:none;
border:none;
color:white;
padding:none;
font-family: 'Lato', sans-serif;
font-size:1.1em;
margin:0em 1em 0em 0em;
cursor:pointer;
@media ${e=>e.theme.mediaQueries.mediaCel}{
  display:none;
}
`,O=t.div`
background-image:url('/src/images/global.png');
background-repeat:no-repeat;
background-size:cover;
width:1.5em;
height:1.5em;
margin:0.2em;
filter:invert(1);
@media ${e=>e.theme.mediaQueries.mediaTablet}{
 
}
@media ${e=>e.theme.mediaQueries.mediaCel}{
  background-image:url('/src/images/user.png');
  width:1em;
  height:1em;
}
`,M=t.div`
display:flex;
flex-direction:row;
align-items:center;

`,W=t.div`
background-image:url('/src/images/logowhite.png');
background-repeat:no-repeat;
background-size:cover;
width:7em;
height:auto;
@media ${e=>e.theme.mediaQueries.mediaTablet}{
 
}
@media ${e=>e.theme.mediaQueries.mediaCel}{
  width:10em;
  height:2em;
}
`;var J="/amazonprimeclone/assets/cel.8bf09419.png",Z="/amazonprimeclone/assets/wifi.22ef5c28.png",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAgCAYAAAAYPvbkAAAIT0lEQVRo3u1aa2xURRSe3ZZSwPIKICCgPAoRAihGQR4GMCLEkEgIkoCoUFSQh0LARAEVkYgoUf9gjPhAit67uwWUp/hCCiJIJT4CFES7sy20UETeD6HXb+aey5697KOg0C7tJF/uveeeOzs735w5Z2aOEFermHKmMILbhSEXCTNUUyRRsSxrKLANWAM0L4e+CeQCASBNJGUJFNUAYccAS8OUnZOIMIVNVriMLcc3paR7CLghOUlbVixgYRtt0mQQpDVKMtIWEAkngB5VgzRV/KF0TIudhC9UL9majo5PAToATRWJlZc0n2wIi+gDdENHe3DtCCsZD0wFRuB9hstntST99vRcG+gH9Bf+IvXcid7fKQIhL+k0I1lHkb0Xz6FmqHs08DJkk4GbSK8+ZMOAl4AZuk05IVd7Dyu9FrpthnwGeAT1tRX+4mid6lEWA/QBuriJwHMmvesJpAKt6Lk3kO7SVe8mAnOALKBxPNLUMzAImAyMA+5WvxGljbWAB4AZwGxgNNAiPmmGnEQ+6Bw6YwmuZy/6JHua2w15G6b/AckLIe+Jaz49/yGMUAquO+nbE7hvTN/MJ9lJ3L+G61HXb4RQ14u4L4mUB89APjhMWCgVz7PtuiO+P60DoECRx9UhNYAQdexZoBl7V5u9OwbUBT5kPq0v0x0C/G1FlhLgnJs0mmYHAAUu/TJgHVCf1dsV2GldWo4Ck9Sgi0Fa8OmITrJ9kgEUsE75Fh2WQtbwEcnLID/JdPZhxKdoksOkNaFv3mC/oQZFHt6twvUIk18A9kK+0h4AF+v9RnxmOVY+jf32F8AC3NOgCZ7H+x5RRvJ81hmPMXkvJl9CssVM1p9krYEjJLsAbAB8wO9Ml5PWGThO8j3Am8Bapvsq6TV0EZsHrAdO0fN5NVgSk2bKF8QmyxnVDSD7k73r4iLN0h1sYpoz5f3a6tT0mJA0OU6sLHFIyGJyU/gKnYHR1iZGy/NFoNhrt0ceItmnF61KERXWnRaFtFtplKvid6ZI1XnMAvrHIW0uky1g3ysr/ouTRlZmkqxYEcN8pUPQFpJNZfV+DHhJPpgGhyrbo/vWSNKmuabOt5gljIpC2r1RpttEljac+ccBrK5F4ShUppPlKfke4Svx4jqQtXMUUEv7W1POYvIxMaLCzaxz1bToBX4mWb7ja2KQlsusrHO8QITqPkgyH8lqkY88QfLV9O0q9lu9XcHQPpIrq2t6uaQ9yzp1/DUjLSd4KWmmfMLl786HLUzr/QprrB8jysvivgpox/zRDKYXQRoR7kyDp4EmCUhrzKzEseLz7PkEGwx5TN7KVe9G9n3HyyVtFuuUMRVKmiEfj5iWjeDXwHeAiXomgLCMOKF5BgUbFvm4CXR/BrglFmkky2eBTMsEpDVipO0ga9pI11dUtMq+3cJ+K9NV71bm1zLLT5ovqAhYzjqqbwVb2r2snVliDeZ638HLWYO9Tx3xC/ClM1VxnxGDND6NDU5AmpoKD5BsjTM9x2gPj1SHM7mKYg+TXAVAdRJEj3IdhfGZuE6kKUjJC4S/ML1CSfPJunguJn213BgI62qIxbzyax2gNxTXtDik9WHTlWMNQ1060Ugby2T5NL22V5EoWao7EMlmU9t0tYdJ71rQuq011TvIVW93oA2wiMmzyxPyUzjtkHUxlB7GOrpiSLPrzmJtU+08Za/9lEwqNIpDmte1Jipyj+IYpCnr+SGGnyqLEvK3o8jRYtPqSbqqksXas5TpqYH0D3tWa8ibyxPygxC5ltZPqkN+gwwjuNi9i4+1kdyF+9ui7PIH6P1WrNvqkmwirafycd+X6XbT9dj6z4dJk6l43kHfrBD+A3Z4H9A7NkPw7ie2CaDIOwDZYiA9wRSprGM3YXqU97No1O9SC18mb0KEllJEp6K7acDrpK/WbjWZvrLEFbRIttgCXvm3LkwvjXZCCpj1H6HIs02cHRGXT/MfUp1ZT2/2+oKpUf55GOV3KLG/ifUu3jdqPWfKG/VWmk+2AmqL9VZ5fZuwLqftkd9lULCRxuuKVh/J69OU1xZoEMe/1aRpVG2V1UvcvnjRY3WppKWatCQspt4tL9Iw5aPVHVJdnH1MD0Lz1OQb0IU16dhpBgb1e3p/1FAnIXKeXnL46ejpOrXmO+go52GRU+qp/O0N1UBbp+g2Ry6HImHKkdcvaX4p7E7QRyrf47638BVX5kE2016KyK+ApcA7wEJALWdKGWlTru8pcrkmbiT+7Gkib60mz5CeSkiaR0/py4si5RssZYVdGWkjqkrg0wt/WLKDz1zIHkJnpFc+X1yUau/a6A3qdeLtAtX+Voy0jlUoMJHN8YfXuHxESKcimPJ2XCvOwX++3z6ENeVzaNMudsAaEBt1Dsx9bP8zTVSp4i9Uoxj5KfLIpedkOBsz5Vxtlb5QnWsQ3dbQOZqGnK59bmSezCkdPSodva6Vc4jEhcJniapZdGqBzHFtUvOkHST7yNV6b1KNcpW55S+88hGes9+rt+gM2V2fwxnyE8qHuRDlt3N15LvECi9dDJmndZ30iypb/EUe+7wMnRRxGh0VZ/XUZAQ3Qz/bzu7S6X5jbN8oH9QZXAY2llXgY8qncI9ML/kuvlHJQEgeCh6P/xsyXy9PHOsKD7BMCqKQzyKr199Enpcc/zqd0hefvP8bF7QVmcij9MUIivRJPpKLnDzN6sKK2uW2k2bnUUZY2dUjSxZrK9SHv4XeOD7YQ8uUe6oJSlQCoRQ7TU5nHW+mc77/QpTK7fyRkmb7xbSqaGXZQW81IVcWuKg09Lt0upwRhCVKQye02lHfVpuQ4DZgC+436FBdnZyb8knc98RZXEay/vV/AdpHusu7pYutAAAAAElFTkSuQmCC";const X=()=>a(D,{children:[i(B,{src:F}),a($,{children:[a(q,{children:[i(m,{to:"/",children:"Terms and Privacy Notice"}),i(m,{to:"/",children:"Send us feed back"}),i(m,{to:"/",children:"Help"})]}),i(G,{children:"\xA9 1996-2022, Amazon.com, Inc. or its affiliates"})]})]}),D=t.div`
padding:2em 0em 4em 0em;
background:#0b1014f0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
a{
    color:#007185;
    font-size:1em;
    text-decoration:none;
    white-space:no-wrap;
    @media ${e=>e.theme.mediaQueries.mediaCel}{
     font-size:0.9em;
    }
}

`,G=t(C)`
color:#949494;
margin:0em 0.5em 0em 0.5em;
font-size:1em;

`,B=t.img`
width:7em;
height:2em;
`,q=t.div`
display:flex;
flex-direction:row;
text-align:center;
justify-content:center;
@media ${e=>e.theme.mediaQueries.mediaCel}{
    padding:1em;
    flex-wrap:wrap;
}

`,$=t.div`
display:flex;
flex-direction:row;
text-align:center;
justify-content:center;
@media ${e=>e.theme.mediaQueries.mediaCel}{
    display:flex;
    flex-direction:column;
}
`,Y=()=>a("div",{children:[i(P,{}),i(Q,{}),a(_,{children:[i(l,{img:V,sub:"Watch anywhere",p:"Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs \u2014 on up to 3 devices at once."}),i(l,{img:J,sub:"Download and go",p:"Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device."}),i(l,{img:Z,sub:"Data saver",p:"Control data usage while downloading and watching videos on select phones or tablets."})]}),i(X,{})]}),_=t.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
margin:4em 0em 4em 0em;

@media ${e=>e.theme.mediaQueries.mediaCel}{
 flex-direction:column;

 }
@media ${e=>e.theme.mediaQueries.mediaTablet}{
 flex-direction:column;
 
 }
`;function ee(){return i("div",{children:i(f,{basename:"/amazonprimeclone",children:i(b,{children:i(w,{path:"/",element:i(Y,{})})})})})}var ie={mediaQueries:{mediaPc:"only screen and (min-width:1025px)",mediaTablet:"only screen and (max-width: 1024px) and (min-width:617px)",mediaCel:"only screen and (max-width:616px)"}};x.render(i(y,{theme:ie,children:i(ee,{})}),document.getElementById("root"));
