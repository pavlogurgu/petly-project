"use strict";(self.webpackChunkpetly=self.webpackChunkpetly||[]).push([[73],{8870:function(e,n,r){r.d(n,{Z:function(){return h}});var t=r(1413),i=r(9439),o=r(5987),s=(r(2791),r(763)),a=r(5705),c=r(5476),l={Input:(0,r(3457).Z)(c.Z)((function(e){var n=e.theme;return{"& label.Mui-focused":{color:"#5e5b5d",border:"1px solid ".concat(n.colors.white)},"& fieldset":{fontFamily:n.fonts[0],fontWeight:n.fontWeights.normal,fontSize:n.fontSizes.text.s,lineHeight:n.lineHeights.xs,border:"1px solid ".concat(n.colors.accent),borderRadius:"40px"},"&:hover fieldset":{border:"1px solid ".concat(n.colors.white)},"&.Mui-focused fieldset":{borderWidth:"2px",backgroundColor:"white"}}}))},d=r(184),m=["errorText"],u=function(e){var n=l.Input,r=(e.errorText,(0,o.Z)(e,m)),c=(0,a.U$)(e),u=(0,i.Z)(c,2),h=u[0],f=u[1];return(0,d.jsx)(n,(0,t.Z)((0,t.Z)({error:f.touched&&f.error&&!0,helperText:function(){var e=(0,s.at)(f,"touched","error"),n=(0,i.Z)(e,2),r=n[0],t=n[1];if(r&&t)return t}()},h),r))},h=u},73:function(e,n,r){r.r(n),r.d(n,{default:function(){return ue}});var t,i,o,s,a,c,l,d,m,u=r(9439),h=r(2791),f=r(5705),x=r(8870),p=r(168),g=r(3457),Z={Container:(0,g.Z)("div")(t||(t=(0,p.Z)(["\nmargin: 40px 0;\n"])))},b=r(1889),j=r(3466),w=r(3400),y=r(165),P=r(3746),v=r(184),k=function(e){var n=(0,h.useState)(!0),r=(0,u.Z)(n,2),t=r[0],i=r[1],o=function(){i((function(e){return!e}))},s=e.formField,a=s.email,c=s.password,l=s.confirmPassword,d=Z.Container;return(0,v.jsx)(h.Fragment,{children:(0,v.jsx)(d,{children:(0,v.jsxs)(b.ZP,{container:!0,spacing:3,children:[(0,v.jsx)(b.ZP,{item:!0,xs:12,children:(0,v.jsx)(x.Z,{name:a.name,label:a.label,type:"email",fullWidth:!0})}),(0,v.jsx)(b.ZP,{item:!0,xs:12,children:(0,v.jsx)(x.Z,{name:c.name,label:c.label,type:t?"password":"input",fullWidth:!0,InputProps:{endAdornment:(0,v.jsx)(j.Z,{position:"end",children:(0,v.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:o,children:t?(0,v.jsx)(y.Z,{}):(0,v.jsx)(P.Z,{})})})}})}),(0,v.jsx)(b.ZP,{item:!0,xs:12,children:(0,v.jsx)(x.Z,{name:l.name,label:l.label,type:t?"password":"input",fullWidth:!0,InputProps:{endAdornment:(0,v.jsx)(j.Z,{position:"end",children:(0,v.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:o,children:t?(0,v.jsx)(y.Z,{}):(0,v.jsx)(P.Z,{})})})}})})]})})})},C=k,q={Container:(0,g.Z)("div")(i||(i=(0,p.Z)(["\n  margin: 40px 0;\n"])))},F=function(e){var n=e.formField,r=n.name,t=n.city,i=n.phone,o=q.Container;return(0,v.jsx)(h.Fragment,{children:(0,v.jsx)(o,{children:(0,v.jsxs)(b.ZP,{container:!0,spacing:3,children:[(0,v.jsx)(b.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(x.Z,{name:r.name,label:r.label,type:"text",fullWidth:!0})}),(0,v.jsx)(b.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(x.Z,{name:t.name,label:t.label,type:"text",fullWidth:!0})}),(0,v.jsx)(b.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(x.Z,{id:"tel",placeholder:"+380",name:i.name,label:i.label,type:"tel",fullWidth:!0})})]})})})},z=F,S=r(890),M=function(e){var n=(0,f.u6)().values,r=n.email,t=n.name,i=n.city,o=n.phone;return(0,v.jsx)(h.Fragment,{children:(0,v.jsx)(b.ZP,{container:!0,spacing:2,children:(0,v.jsxs)(b.ZP,{item:!0,container:!0,direction:"column",xs:12,children:[(0,v.jsx)(S.Z,{variant:"h6",gutterBottom:!0,children:"User details:"}),(0,v.jsxs)(b.ZP,{container:!0,children:[(0,v.jsxs)(h.Fragment,{children:[(0,v.jsx)(b.ZP,{item:!0,xs:12,children:(0,v.jsxs)(S.Z,{gutterBottom:!0,children:["Email:"," ".concat(r)]})}),(0,v.jsx)(b.ZP,{item:!0,xs:12,children:(0,v.jsxs)(S.Z,{gutterBottom:!0,children:["Name: "," ".concat(t," ")]})})]}),(0,v.jsx)(h.Fragment,{children:(0,v.jsx)(b.ZP,{item:!0,xs:12,children:(0,v.jsxs)(S.Z,{gutterBottom:!0,children:["City:","".concat(i)]})})}),(0,v.jsx)(h.Fragment,{children:(0,v.jsx)(b.ZP,{item:!0,xs:12,children:(0,v.jsxs)(S.Z,{gutterBottom:!0,children:["Mobile phone: "," ".concat(o)]})})})]})]})})})},W=M,E=r(4942),R=r(2797),L={formId:"checkoutForm",formField:{email:{name:"email",label:"Email*",requiredErrorMsg:"Email is required"},password:{name:"password",label:"Password*",requiredErrorMsg:"Password is required"},confirmPassword:{name:"confirmPassword",label:"ConfirmPassword*",requiredErrorMsg:"ConfirmPassword is required"},name:{name:"name",label:"Name",requiredErrorMsg:"Name is required"},city:{name:"city",label:"City",requiredErrorMsg:"City is required",defaultValue:"unknown"},phone:{name:"phone",label:"Mobile phone",requiredErrorMsg:"Phone is required"}}},A=L.formField,T=A.email,_=A.password,B=A.confirmPassword,H=A.name,I=A.city,$=A.phone,U=[R.Ry().shape((o={},(0,E.Z)(o,T.name,R.Z_().min(10).max(63).matches(/^(([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5}))$/,"email can contain only latin letters, numbers and symbols . -  _ (dot, hyphen, underscore) and can't start from hyphen").required("".concat(T.requiredErrorMsg))),(0,E.Z)(o,_.name,R.Z_().matches(/^[^ ]{7,32}$/,"password should be from 7 to 32 characters long, without spaces").required("".concat(_.requiredErrorMsg))),(0,E.Z)(o,B.name,R.Z_().min(7).max(32).required("".concat(B.requiredErrorMsg)).oneOf([R.iH("password")],"passwords does not match")),o)),R.Ry().shape((s={},(0,E.Z)(s,H.name,R.Z_().min(2).max(16).matches(/^[^ ][a-zA-z\u0430-\u044f\u0456\u0457\u0454\u0410-\u042f\u0406\u0407\u0404 ]+$/,"name can contain only Latin and Cyrillic characters and can't start from spaces").required("".concat(H.requiredErrorMsg))),(0,E.Z)(s,I.name,R.Z_().min(3).max(19).matches(/^[^ -,][a-zA-z\u0430-\u044f\u0456\u0457\u0454\u0410-\u042f\u0406\u0407\u0404, -]+[^ -]$/,"city can contain only Latin and Cyrillic characters, 3 - 19 symbols and can't start or end with spaces and hyphen")),(0,E.Z)(s,$.name,R.Z_().min(13).max(13).matches(/^[+]380\d{3}\d{2}\d{2}\d{2}$/,"Phone number can contain only 13 symbols: starts from  '+380' and 9 digits after.")),s))],N=L.formField,V=N.email,J=N.password,O=N.confirmPassword,D=N.name,G=N.city,K=N.phone,Q=(a={},(0,E.Z)(a,V.name,""),(0,E.Z)(a,J.name,""),(0,E.Z)(a,O.name,""),(0,E.Z)(a,D.name,""),(0,E.Z)(a,G.name,""),(0,E.Z)(a,K.name,""),a),X=r(1405),Y=r(9273),ee=r(3028),ne=r(6151),re=r(1087),te=(0,g.Z)(f.l0)(c||(c=(0,p.Z)(["\n  display: grid;\n  margin-top: 42px;\n  width: 100%;\n\n  @media screen and (min-width: ",") {\n    display: grid;\n    margin: auto;\n    margin-top: 173px;\n    width: 608px;\n    padding: 60px 80px 40px 80px;\n    background: #ffffff;\n    box-shadow: ",";\n    border-radius: 40px;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 618px;\n    padding: 60px 80px;\n    background: #ffffff;\n    box-shadow: ",";\n    border-radius: 40px;\n  }\n"])),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.shadows.cardsShadowUser}),(function(e){return e.theme.breakpoints.desktop}),(function(e){return e.theme.shadows.cardsShadowUser})),ie={Title:(0,g.Z)("h1")(l||(l=(0,p.Z)(["\n  color: ",";\n\n  align-items: center;\n  text-align: center;\n\n  font-family: ",";\n  font-weight: ",";\n  fon-size: ",";\n  line-height: ",";\n\n  @media screen and (min-width: ",") {\n    font-family: ",";\n    font-weight: ",";\n    fon-size: ",";\n    line-height: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.fonts[0]}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.fontSizes.headers.xs}),(function(e){return e.theme.lineHeights.m}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.fonts[0]}),(function(e){return e.theme.fontWeights.medium}),(function(e){return e.theme.fontSizes.headers.m}),(function(e){return e.theme.lineHeights.s})),Buttons:(0,g.Z)(ne.Z)((function(e){var n=e.theme;return{width:"100%",padding:"8px 0",color:n.colors.black,background:n.colors.white,borderRadius:"40px",border:"2px solid ".concat(n.colors.accent),textTransform:"none",fontFamily:n.fonts[0],fontWeight:n.fontWeights.medium,fontSize:n.fontSizes.text.xl,lineHeight:n.lineHeights.s,":hover, :focus ":{backgroundColor:n.colors.accent,color:n.colors.white}}})),AccountRedirect:(0,g.Z)("p")(d||(d=(0,p.Z)(["\n  color: ",";\n\n  text-align: center;\n  margin-top: 40px;\n\n  font-family: ",";\n  font-weight: ",";\n  fon-size: ",";\n  line-height: ",";\n"])),(function(e){return e.theme.colors.placeholderText}),(function(e){return e.theme.fonts[0]}),(function(e){return e.theme.fontWeights.normal}),(function(e){return e.theme.fontSizes.text.xs}),(function(e){return e.theme.lineHeights.xs})),LinkLoginRoute:(0,g.Z)(re.rU)(m||(m=(0,p.Z)(["\n  text-decoration: underline;\n  color: ",";\n"])),(function(e){return e.theme.colors.links})),RegisterForm:te},oe=Y.Z.register,se=["Shipping address","Payment details","Review your order"],ae=L.formId,ce=L.formField;function le(e){switch(e){case 0:return(0,v.jsx)(C,{formField:ce});case 1:return(0,v.jsx)(z,{formField:ce});case 2:return(0,v.jsx)(W,{formField:ce});default:return}}var de=function(){var e=(0,h.useState)(0),n=(0,u.Z)(e,2),r=n[0],t=n[1],i=(0,h.useState)(!1),o=(0,u.Z)(i,2),s=o[0],a=o[1],c=U[r],l=r===se.length-1,d=(0,X.I0)(),m=ie.Title,x=ie.LinkLoginRoute,p=ie.Buttons,g=ie.RegisterForm,Z=ie.AccountRedirect,b=function(){t(r-1)};return(0,v.jsx)(f.J9,{initialValues:Q,validationSchema:c,onSubmit:function(e,n){l?function(e){var n=e.email,r=e.password,i=e.name,o=e.city,s=e.phone,c=""===o?"unknown":o,l=""===s?"+380000000000":s;d(oe({email:n.toLowerCase().trim(),password:r.toLowerCase().trim(),name:i.toLowerCase().trim(),city:c.toLowerCase().trim(),phone:l.toLowerCase().trim()})),a(!0),setTimeout((function(){t(0),a(!1)}),3e3)}(e):(t(r+1),n.setTouched({}),n.setSubmitting(!1))},children:function(e){e.isSubmitting;return(0,v.jsxs)(g,{id:ae,children:[(0,v.jsx)(m,{children:"Registration"}),le(r),s?(0,v.jsx)(ee.Z,{}):(0,v.jsx)("div",{children:(0,v.jsxs)("div",{children:[(0,v.jsx)(p,{type:"submit",children:l?"Register":"Next"}),0!==r&&(0,v.jsx)(p,{onClick:b,style:{marginTop:16},children:"Back"}),(0,v.jsxs)(Z,{children:["Already have an account?",(0,v.jsx)(x,{to:"/login",children:" Login"})]})]})})]})}})},me=de,ue=function(){return(0,v.jsx)(me,{})}}}]);
//# sourceMappingURL=73.c316fc94.chunk.js.map