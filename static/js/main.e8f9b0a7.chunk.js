(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter_input:"Filter_filter_input__3QAmX",filter_label:"Filter_filter_label__2I0f_"}},20:function(t,e,n){},3:function(t,e,n){t.exports={form_input:"ContactForm_form_input__3NfwP",form_label:"ContactForm_form_label__1MBoD",addButton:"ContactForm_addButton__1Z29g"}},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(12),c=n.n(o),s=(n(20),n(15)),i=n(5),l=n(6),u=n(8),m=n(7),d=n(13),b=n(2),f=n.n(b),h=n(3),p=n.n(h),j=n(14),_=n.n(j),v=n(0),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.formSubmitHandler=function(e){e.preventDefault();var n=t.state,a={name:n.name,number:n.number,id:_.a.generate()};t.props.submitHandler(a),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{onSubmit:this.formSubmitHandler,children:[Object(v.jsxs)("label",{className:p.a.form_label,children:["Name",Object(v.jsx)("input",{className:p.a.form_input,type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(v.jsxs)("label",{className:p.a.form_label,children:["Number",Object(v.jsx)("input",{className:p.a.form_input,type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(v.jsx)("button",{className:p.a.addButton,children:"Add contacts"})]})}}]),n}(a.Component);C.PropTypes={onSubmit:f.a.func.isRequired};var O=C,g=n(9),x=n.n(g),N=function(t){var e=t.addedContacts,n=t.onDeleteContact;return Object(v.jsx)("ul",{className:x.a.users,children:e.map((function(t){var e=t.name,a=t.id,r=t.number;return Object(v.jsxs)("li",{className:x.a.userInfo,children:[Object(v.jsxs)("p",{children:[e," : ",r]}),Object(v.jsx)("button",{className:x.a.removeContactButton,type:"button",onClick:function(){return n(a)},children:"Delete"})]},a)}))})};N.prototype={onDeleteContact:f.a.func.isRequired};var y=N,S=n(11),A=n.n(S),k=function(t){var e=t.onChange,n=t.value;return Object(v.jsxs)("label",{className:A.a.filter_label,children:["Filter",Object(v.jsx)("input",{className:A.a.filter_input,value:n,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:e})]})};k.prototype={value:f.a.string,onChange:f.a.func.isRequired};var D=k,I=(n(32),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.submitHandler=function(e){var n=t.state.contacts;n.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts!")):t.setState({contacts:[e].concat(Object(s.a)(n))})},t.handleFilterContacts=function(e){var n=e.currentTarget;t.setState({filter:n.value})},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("components"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 contacts, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e todos \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),localStorage.setItem("contacts",JSON.stringify(n)))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.state.filter.toLocaleLowerCase(),r=e.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}));return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{className:"phonebookHeader",children:"Phonebook"}),Object(v.jsx)(O,{submitHandler:this.submitHandler}),Object(v.jsx)("h2",{className:"contactsHeader",children:"Contacts"}),Object(v.jsx)(D,{value:n,onChange:this.handleFilterContacts}),Object(v.jsx)(y,{addedContacts:r,onDeleteContact:this.handleDeleteContact})]})}}]),n}(a.Component));c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={users:"ContactList_users__2Tskr",removeContactButton:"ContactList_removeContactButton__2OagN",userInfo:"ContactList_userInfo__27mXT"}}},[[33,1,2]]]);
//# sourceMappingURL=main.e8f9b0a7.chunk.js.map