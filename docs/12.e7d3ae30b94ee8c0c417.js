(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{LojI:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n("mrSG"),a=n("ECBP"),r=n("6MAI"),o=n("fXoL"),s=n("da3i"),l=n("3Pt+"),c=n("QH85"),b=n("neZC"),u=n("QlUG"),d=n("8+11"),h=n("ofXK"),g=n("gyL+");function m(t,e){if(1&t){const t=o.Ub();o.Tb(0,"app-button-create",5),o.ac("onClick",function(){return o.vc(t),o.dc(2).goToCreate()}),o.Sb()}}function p(t,e){if(1&t){const t=o.Ub();o.Tb(0,"div",2),o.Tb(1,"app-button-base",3),o.ac("onClick",function(){return o.vc(t),o.dc().goToList()}),o.Hc(2,"T\xecm ki\u1ebfm"),o.Sb(),o.Fc(3,m,1,0,"app-button-create",4),o.Sb()}if(2&t){const t=o.dc();o.zb(3),o.jc("ngIf",t.isSuperAdmin)}}let f=(()=>{class t extends a.a{constructor(t,e,n,i){super(t),this.ngControl=e,this.modalService=n,this.titleService=i,this.labelContent="Ch\u1ee9c danh",this.span=4,this.required=!1,this.labelHorizontal=!0,this.onChange=new o.n,this.listData=[],this.loading=!1,null!=this.ngControl&&(this.ngControl.valueAccessor=this)}ngOnInit(){this.fetchList()}writeValue(t){}registerOnChange(t){}registerOnTouched(t){}setDisabledState(t){}handleChange(t){this.onChange.emit(t)}fetchList(){this.titleService.getList().toPromise().then(t=>{this.loading=!1,t&&t.success?this.listData=t.data.content:this.message.error(t.message)})}goToList(){this.modalService.openListModal(s.a).afterClose.toPromise().then(t=>Object(i.a)(this,void 0,void 0,function*(){t&&(this.ngControl.control.setValue(t.id),this.listData.find(e=>e.id==t.id)||(this.listData=[...this.listData,t]))}))}goToCreate(){this.modalService.openCreateModal(r.a).afterClose.toPromise().then(t=>Object(i.a)(this,void 0,void 0,function*(){t&&(this.listData=[...this.listData,t],this.ngControl.control.setValue(t.id),this.onChange.emit(t))}))}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(o.r),o.Nb(l.m,10),o.Nb(c.a),o.Nb(b.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-select-title"]],inputs:{labelContent:"labelContent",span:"span",required:"required",labelHorizontal:"labelHorizontal"},outputs:{onChange:"onChange"},features:[o.wb],decls:3,vars:8,consts:[["type","select","labelField","name",3,"labelHorizontal","selectData","span","labelContent","formControl","required","footerSelectTemplate","loading","onChange"],["footer",""],[1,"container","m-5"],["iconType","search",3,"onClick"],[3,"onClick",4,"ngIf"],[3,"onClick"]],template:function(t,e){if(1&t&&(o.Tb(0,"app-input",0),o.ac("onChange",function(t){return e.handleChange(t)}),o.Sb(),o.Fc(1,p,4,1,"ng-template",null,1,o.Gc)),2&t){const t=o.tc(2);o.jc("labelHorizontal",e.labelHorizontal)("selectData",e.listData)("span",e.span)("labelContent",e.labelContent)("formControl",e.ngControl.control)("required",e.required)("footerSelectTemplate",t)("loading",e.loading)}},directives:[u.a,l.n,l.g,l.s,d.a,h.n,g.a],styles:[""]}),t})()},Lxo8:function(t,e,n){"use strict";n.d(e,"a",function(){return S});var i=n("mrSG"),a=n("AytR"),r=n("ECBP"),o=n("dI7A"),s=n("Z+4V"),l=n("fXoL"),c=n("3Pt+"),b=n("QH85"),u=n("FQ+V"),d=n("QlUG"),h=n("8+11"),g=n("ofXK"),m=n("gyL+");function p(t,e){if(1&t){const t=l.Ub();l.Tb(0,"app-button-create",5),l.ac("onClick",function(){return l.vc(t),l.dc(2).goToCreate()}),l.Sb()}}function f(t,e){if(1&t){const t=l.Ub();l.Tb(0,"div",2),l.Tb(1,"app-button-base",3),l.ac("onClick",function(){return l.vc(t),l.dc().goToList()}),l.Hc(2,"T\xecm ki\u1ebfm"),l.Sb(),l.Fc(3,p,1,0,"app-button-create",4),l.Sb()}if(2&t){const t=l.dc();l.zb(3),l.jc("ngIf",t.isSuperAdmin)}}let S=(()=>{class t extends r.a{constructor(t,e,n,i){super(t),this.ngControl=e,this.modalService=n,this.departmentService=i,this.labelContent="Khoa ph\xf2ng",this.span=4,this.required=!1,this.organizationId=a.a.INTERNAL_ORGANIZATION_ID,this.labelHorizontal=!0,this.selectMode="default",this.onChange=new l.n,this.listData=[],this.firstLoad=!0,null!=this.ngControl&&(this.ngControl.valueAccessor=this)}ngOnInit(){}ngOnChanges(t){(t.organizationId||this.organizationId)&&(this.organizationId?(this.fetchList(),this.firstLoad?this.firstLoad=!1:this.ngControl.control.reset()):(this.listData=[],this.ngControl.control.reset()))}writeValue(t){}registerOnChange(t){}registerOnTouched(t){}setDisabledState(t){}handleChange(t){this.onChange.emit(t)}fetchList(){const t=JSON.stringify({ListTextSearch:this.request.listTextSearch});this.departmentService.getList(1,1e3,this.request.sort,t,this.organizationId).toPromise().then(t=>{this.loading=!1,t&&t.success?this.listData=t.data.content:this.message.error(t.message)})}goToList(){this.modalService.openListModal(o.a).afterClose.toPromise().then(t=>Object(i.a)(this,void 0,void 0,function*(){t&&(this.ngControl.control.setValue(t.id),this.onChange.emit(t))}))}goToCreate(){this.modalService.openCreateModal(s.a).afterClose.toPromise().then(t=>Object(i.a)(this,void 0,void 0,function*(){t&&(this.listData=[...this.listData,t],this.ngControl.control.setValue(t.id),this.onChange.emit(t))}))}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(l.r),l.Nb(c.m,10),l.Nb(b.a),l.Nb(u.a))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-select-department"]],inputs:{labelContent:"labelContent",span:"span",required:"required",organizationId:"organizationId",labelHorizontal:"labelHorizontal",selectMode:"selectMode"},outputs:{onChange:"onChange"},features:[l.wb,l.xb],decls:3,vars:8,consts:[["type","select","labelField","name",3,"selectMode","labelHorizontal","selectData","span","labelContent","formControl","required","footerSelectTemplate","onChange"],["footer",""],[1,"container","m-5"],["iconType","search",3,"onClick"],[3,"onClick",4,"ngIf"],[3,"onClick"]],template:function(t,e){if(1&t&&(l.Tb(0,"app-input",0),l.ac("onChange",function(t){return e.handleChange(t)}),l.Sb(),l.Fc(1,f,4,1,"ng-template",null,1,l.Gc)),2&t){const t=l.tc(2);l.jc("selectMode",e.selectMode)("labelHorizontal",e.labelHorizontal)("selectData",e.listData)("span",e.span)("labelContent",e.labelContent)("formControl",e.ngControl.control)("required",e.required)("footerSelectTemplate",t)}},directives:[d.a,c.n,c.g,c.s,h.a,g.n,m.a],styles:[""]}),t})()},kk3Z:function(t,e,n){"use strict";n.r(e),n.d(e,"ClientModule",function(){return Ot});var i=n("Hgu+"),a=n("OpKh"),r=n("uRpX"),o=n("ofXK"),s=n("PCNd"),l=n("3Pt+"),c=n("tyNb"),b=n("mrSG"),u=n("1XBi"),d=n("AytR"),h=n("fXoL"),g=n("7VIp"),m=n("tk/3");let p=(()=>{class t{constructor(t){this.httpClient=t,this.serviceUrl=d.a.BASE_API_URL+"/api/clienttrainingprogram"}create(t){return t=Object.assign(Object.assign({},t),{fromDate:t.fromDate?Object(g.b)(t.fromDate):null,toDate:t.toDate?Object(g.b)(t.toDate):null}),this.httpClient.post(this.serviceUrl,t)}uploadFile(t){let e=new FormData;return e.append("File",t),this.httpClient.post(this.serviceUrl+"/upload-file-training-program",e)}}return t.\u0275fac=function(e){return new(e||t)(h.Xb(m.c))},t.\u0275prov=h.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=n("CFL1"),S=n("2I5R"),v=n("AVD9"),T=n("n/iK"),C=n("QlUG"),z=n("1Uxm"),y=n("IiJ/"),N=n("UQmu"),P=n("OzZK"),j=n("RwU8"),I=n("C2AL"),w=n("+oEP"),O=n("FwiY");function H(t,e){if(1&t&&(h.Tb(0,"div",19),h.Tb(1,"div",9),h.Ob(2,"app-autocomplete-training-program-subject",20),h.Sb(),h.Tb(3,"div",9),h.Ob(4,"app-input",21),h.Tb(5,"button",22),h.Hc(6,"H\u01b0\u1edbng d\u1eabn quy \u0111\u1ed5i "),h.Ob(7,"i",23),h.Sb(),h.Sb(),h.Sb()),2&t){const t=e.index,n=h.dc(),i=h.tc(18);h.jc("formGroupName",t),h.zb(2),h.jc("listData",n.listSubject),h.zb(3),h.jc("nzPopoverContent",i)}}function D(t,e){1&t&&(h.Tb(0,"div",24),h.Hc(1," 1) H\u1ed9i th\u1ea3o, h\u1ed9i ngh\u1ecb, t\u1ecda \u0111\xe0m khoa h\u1ecdc trong v\xe0 ngo\xe0i n\u01b0\u1edbc v\u1ec1 l\u0129nh v\u1ef1c chuy\xean m\xf4n y t\u1ebf c\xf3 x\xe1c nh\u1eadn c\u1ee7a \u0111\u01a1n v\u1ecb ch\u1ee7 tr\xec t\u1ed5 ch\u1ee9c c\u0103n c\u1ee9 v\xe0o ch\u01b0\u01a1ng tr\xecnh c\u1ee7a h\u1ed9i th\u1ea3o, h\u1ed9i ngh\u1ecb, t\u1ecda \u0111\xe0m: th\u1eddi gian tham gia \u0111\xe0o t\u1ea1o \u0111\u01b0\u1ee3c t\xednh cho ng\u01b0\u1eddi ch\u1ee7 tr\xec ho\u1eb7c c\xf3 b\xe0i tr\xecnh b\xe0y t\u1ed1i \u0111a 8 ti\u1ebft h\u1ecdc v\xe0 ng\u01b0\u1eddi tham d\u1ef1 t\u1ed1i \u0111a 4 ti\u1ebft h\u1ecdc cho m\u1ed7i h\u1ed9i th\u1ea3o/h\u1ed9i ngh\u1ecb/t\u1ecda \u0111\xe0m."),h.Ob(2,"br"),h.Ob(3,"br"),h.Hc(4," 2) Th\u1ef1c hi\u1ec7n nghi\xean c\u1ee9u khoa h\u1ecdc: \u0111\u01b0\u1ee3c t\xednh t\u1ed1i \u0111a 12 ti\u1ebft h\u1ecdc cho ng\u01b0\u1eddi h\u01b0\u1edbng d\u1eabn lu\u1eadn \xe1n, ch\u1ee7 tr\xec/th\u01b0 k\xfd \u0111\u1ec1 t\xe0i c\u1ea5p Nh\xe0 n\u01b0\u1edbc ho\u1eb7c c\u1ea5p B\u1ed9; 8 ti\u1ebft h\u1ecdc cho h\u01b0\u1edbng d\u1eabn lu\u1eadn v\u0103n ho\u1eb7c ch\u1ee7 tr\xec/th\u01b0 k\xfd \u0111\u1ec1 t\xe0i c\u1ea5p c\u01a1 s\u1edf (t\xednh t\u1ea1i th\u1eddi \u0111i\u1ec3m lu\u1eadn v\u0103n \u0111\u01b0\u1ee3c b\u1ea3o v\u1ec7 th\xe0nh c\xf4ng ho\u1eb7c \u0111\u1ec1 t\xe0i \u0111\u01b0\u1ee3c nghi\u1ec7m thu \u0111\u1ea1t)"),h.Ob(5,"br"),h.Ob(6,"br"),h.Hc(7," 3) Vi\u1ebft b\xe0i b\xe1o khoa h\u1ecdc \u0111\xe3 \u0111\u01b0\u1ee3c c\xf4ng b\u1ed1: \u0111\u01b0\u1ee3c t\xednh t\u1ed1i \u0111a 8 ti\u1ebft"),h.Ob(8,"br"),h.Ob(9,"br"),h.Hc(10," 4) Bi\xean so\u1ea1n gi\xe1o tr\xecnh chuy\xean m\xf4n \u0111\u01b0\u1ee3c t\xednh t\u1ed1i \u0111a kh\xf4ng qu\xe1 8 ti\u1ebft \u0111\u1ed1i v\u1edbi 1 t\xe0i li\u1ec7u do ng\u01b0\u1eddi \u0111\u1ee9ng \u0111\u1ea7u \u0111\u01a1n v\u1ecb xem x\xe9t (t\xednh v\xe0o th\u1eddi \u0111i\u1ec3m xu\u1ea5t b\u1ea3n); c\xe1n b\u1ed9 y t\u1ebf kh\xf4ng ph\u1ea3i l\xe0 gi\u1ea3ng vi\xean c\u1ee7a c\u01a1 s\u1edf gi\xe1o d\u1ee5c tham gia gi\u1ea3ng d\u1ea1y li\xean quan \u0111\u1ebfn chuy\xean m\xf4n nghi\u1ec7p v\u1ee5 \u0111\u01b0\u1ee3c t\xednh theo th\u1eddi gian th\u1ef1c t\u1ebf. "),h.Sb())}let k=(()=>{class t extends u.a{constructor(t,e,n){super(t),this.clientTrainingProgramService=e,this.userService=n,this.listSubject=[]}ngOnInit(){this.form=this.formBuilder.group({trainingFormId:[null,l.t.required],name:[null,l.t.required],code:[null],fromDate:[null],toDate:[null,l.t.required],organizationId:[null],organizationInput:[null],address:[null],note:[null],metaDataObject:this.formBuilder.group({trainingSubjects:this.formBuilder.array([])}),trainingProgram_Users:this.formBuilder.array([])}),this.addTrainingProgram_UserRow()}get trainingSubjects(){return this.form.get("metaDataObject.trainingSubjects")}addTrainingSubjectRow(t){this.trainingSubjects.push(this.createTrainingSubjectItem(t))}deleteTrainingSubjectRow(t){this.trainingSubjects.removeAt(t)}createTrainingSubjectItem(t){return this.formBuilder.group({name:[t?t.name:null,[l.t.required]],code:[t?t.code:null],order:[t?t.order:null],amount:[t?t.amount:null,[l.t.required]]})}get trainingProgram_Users(){return this.form.controls.trainingProgram_Users}addTrainingProgram_UserRow(t){this.trainingProgram_Users.push(this.createTrainingProgram_UserItem(t))}deleteTrainingProgram_UserRow(t){this.trainingProgram_Users.removeAt(t)}createTrainingProgram_UserItem(t){return this.formBuilder.group({userId:[this.tokenUser.id,[l.t.required]],trainingSubjectName:[null],pathToUploadFile:[null],amount:[4,[l.t.required]],active:[!1],hidden:[null]})}onChangeFile(t){this.uploadFile=t}onSave(){return Object(b.a)(this,void 0,void 0,function*(){for(const t in this.form.controls)this.form.controls[t].markAsDirty(),this.form.controls[t].updateValueAndValidity();for(const t in this.trainingProgram_Users.controls){const e=this.trainingProgram_Users.controls[t];for(const t in e.controls)e.controls[t].markAsDirty(),e.controls[t].updateValueAndValidity()}this.uploadFile?this.form.valid&&(this.loading=!0,yield this.clientTrainingProgramService.uploadFile(this.uploadFile).toPromise().then(t=>{if(!t||!t.success)return this.loading=!1,void this.message.error("L\u1ed7i: "+t.message);this.trainingProgram_Users.at(0).controls.pathToUploadFile.setValue(t.data),this.clientTrainingProgramService.create(this.form.value).toPromise().then(t=>{this.loading=!1,t&&t.success?this.isModal&&(this.message.success("G\u1eedi y\xeau c\u1ea7u th\xe0nh c\xf4ng, Ph\xf2ng C\u0110T s\u1ebd duy\u1ec7t trong th\u1eddi gian s\u1edbm nh\u1ea5t",{nzDuration:1e4}),this.modal.destroy(t.data)):this.message.error("L\u1ed7i: "+t.message)})})):this.message.error("Vui l\xf2ng cung c\u1ea5p file minh ch\u1ee9ng")})}get internalOrganizationId(){return d.a.INTERNAL_ORGANIZATION_ID}onCancel(){this.isModal&&this.modal.destroy()}onTrainingFormChange(t){for(this.listSubject=t.trainingSubjects;this.trainingSubjects.length;)this.trainingSubjects.removeAt(0);t&&t.trainingSubjects&&t.trainingSubjects.forEach(t=>{this.addTrainingSubjectRow(t)})}onChangeTrainingSubject(t,e){this.trainingProgram_Users.at(e).controls.amount.setValue(t.amount)}onChooseTrainingSubject(t){if(t){this.chooseForm.controls.trainingSubject.reset();for(const e in this.trainingProgram_Users.controls)this.trainingProgram_Users.controls[e].controls.trainingSubjectName.setValue(t.name)}}onDuplicateOrganization(t){this.form.controls.organizationId.setValue(t?t.id:null)}}return t.\u0275fac=function(e){return new(e||t)(h.Nb(h.r),h.Nb(p),h.Nb(f.a))},t.\u0275cmp=h.Hb({type:t,selectors:[["app-client-create-training-program"]],features:[h.wb],decls:28,vars:7,consts:[[1,"page-header"],[3,"loading","onClick"],[3,"onClick"],[3,"formGroup","keydown.enter"],[1,"row","m-t-30"],[1,"col-md-12"],["formControlName","trainingFormId","required","",3,"span","onChange"],[1,"row"],["type","text","labelContent","N\u1ed9i dung","formControlName","name","required","",3,"span"],[1,"col-md-6"],["type","datepicker","labelContent","T\u1eeb ng\xe0y","formControlName","fromDate"],["type","datepicker","labelContent","\u0110\u1ebfn ng\xe0y","formControlName","toDate","required",""],["formArrayName","trainingProgram_Users"],["class","row",3,"formGroupName",4,"ngFor","ngForOf"],["contentTemplate",""],["formControlName","organizationInput",3,"span","onDuplicate"],["type","textarea","labelContent","\u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c","formControlName","address"],["type","textarea","labelContent","Ghi ch\xfa","formControlName","note"],[3,"required","onChange"],[1,"row",3,"formGroupName"],["labelContent","\u0110\u1ed1i t\u01b0\u1ee3ng","formControlName","trainingSubjectName",3,"listData"],["type","number","labelContent","S\u1ed1 ti\u1ebft quy \u0111\u1ed5i","formControlName","amount","required",""],["nz-button","","nz-popover","","nzPopoverTitle","H\u01b0\u1edbng d\u1eabn quy \u0111\u1ed5i","nzPopoverTrigger","focus",1,"float-right","m-r-10",2,"font-style","italic","color","#1890ff",3,"nzPopoverContent"],["nz-icon","","nzType","info-circle","nzTheme","outline",1,"m-l-5"],[1,"row",2,"width","500px","padding","10px"]],template:function(t,e){1&t&&(h.Tb(0,"div",0),h.Tb(1,"app-button-save",1),h.ac("onClick",function(){return e.onSave()}),h.Sb(),h.Tb(2,"app-button-cancel",2),h.ac("onClick",function(){return e.onCancel()}),h.Sb(),h.Sb(),h.Tb(3,"form",3),h.ac("keydown.enter",function(t){return t.preventDefault()}),h.Tb(4,"div",4),h.Tb(5,"div",5),h.Tb(6,"app-select-training-form",6),h.ac("onChange",function(t){return e.onTrainingFormChange(t)}),h.Sb(),h.Sb(),h.Sb(),h.Tb(7,"div",7),h.Tb(8,"div",5),h.Ob(9,"app-input",8),h.Sb(),h.Sb(),h.Tb(10,"div",7),h.Tb(11,"div",9),h.Ob(12,"app-input",10),h.Sb(),h.Tb(13,"div",9),h.Ob(14,"app-input",11),h.Sb(),h.Sb(),h.Tb(15,"form",12),h.Fc(16,H,8,3,"div",13),h.Sb(),h.Fc(17,D,11,0,"ng-template",null,14,h.Gc),h.Tb(19,"div",7),h.Tb(20,"div",5),h.Tb(21,"app-autocomplete-organization",15),h.ac("onDuplicate",function(t){return e.onDuplicateOrganization(t)}),h.Sb(),h.Sb(),h.Sb(),h.Tb(22,"div",7),h.Tb(23,"div",9),h.Ob(24,"app-input",16),h.Sb(),h.Tb(25,"div",9),h.Ob(26,"app-input",17),h.Sb(),h.Sb(),h.Sb(),h.Tb(27,"app-dnd-upload",18),h.ac("onChange",function(t){return e.onChangeFile(t)}),h.Sb()),2&t&&(h.zb(1),h.jc("loading",e.loading),h.zb(2),h.jc("formGroup",e.form),h.zb(3),h.jc("span",2),h.zb(3),h.jc("span",2),h.zb(7),h.jc("ngForOf",e.trainingProgram_Users.controls),h.zb(5),h.jc("span",2),h.zb(6),h.jc("required",!0))},directives:[S.a,v.a,l.u,l.o,l.i,T.a,l.n,l.h,l.s,C.a,l.p,l.e,o.m,z.a,y.a,l.j,N.a,P.a,j.a,I.a,w.a,O.a],styles:[""]}),t})();var F=n("GHWL"),U=n("ri4K"),L=n("D9mS"),x=n("ZE2D"),M=n("5vDB"),A=n("AvTa"),q=n("Lxo8"),_=n("LojI"),V=n("TqlK");function R(t,e){if(1&t){const t=h.Ub();h.Tb(0,"app-button-edit",28),h.ac("onClick",function(){return h.vc(t),h.dc().onEdit()}),h.Sb()}}function G(t,e){if(1&t){const t=h.Ub();h.Tb(0,"app-button-save",29),h.ac("onClick",function(){return h.vc(t),h.dc().onSave()}),h.Sb()}if(2&t){const t=h.dc();h.jc("loading",t.loading)}}const Y=function(){return{label:"Nam",value:1}},B=function(){return{label:"N\u1eef",value:0}},E=function(t,e){return[t,e]},J=function(){return{label:"Trong \u0111\u01a1n v\u1ecb Xanhpon",value:"internal"}},Q=function(t){return[t]};let K=(()=>{class t extends u.a{constructor(t,e,n){super(t),this.authenticationService=e,this.userService=n}ngOnInit(){this.form=this.formBuilder.group({username:[null],fullname:[null,l.t.required],code:[null],certificateNumber:[null,l.t.required],issueDate:[null,l.t.required],birthDate:[null],gender:[null],email:[null,l.t.email],phoneNumber:[null,l.t.pattern(F.b)],organizationId:[null],departmentId:[null],titleId:[null],avatarUrl:[null],address:[null],identificationNumber:[null],type:["internal",l.t.required]}),this.fetchDetail()}fetchDetail(){this.userService.getById(this.id).toPromise().then(t=>{t&&t.success?(this.form.patchValue(t.data),this.isEdit||setTimeout(()=>this.form.disable(),300),t.data.type||this.form.controls.type.setValue("internal"),this.avatarFileUrl=F.a+"/"+t.data.avatarUrl):this.message.error("L\u1ed7i: "+t.message)})}handleChange(t){this.avatarFile=t.file.originFileObj,this.getBase64(t.file.originFileObj,t=>{this.avatarFileUrl=t})}getBase64(t,e){const n=new FileReader;n.addEventListener("load",()=>e(n.result)),n.readAsDataURL(t)}onChangeType(t){"internal"==t?(this.form.controls.organizationId.setValue("00000000-0000-0000-0000-000000000001"),this.form.controls.organizationId.disable()):"external"==t&&(this.form.controls.organizationId.setValue(null),this.form.controls.organizationId.enable())}onEdit(){this.isEdit=!0,this.form.enable(),"internal"==this.form.value.type&&this.form.controls.organizationId.disable()}onCancel(){this.isModal&&this.modal.destroy()}onSave(){for(const t in this.form.controls)this.form.controls[t].markAsDirty(),this.form.controls[t].updateValueAndValidity();this.form.valid&&(this.loading=!0,this.form.controls.username.setValue(this.form.getRawValue().certificateNumber),this.authenticationService.updateUser(this.form.getRawValue(),this.avatarFile).toPromise().then(t=>{this.loading=!1,t&&t.success?this.isModal&&(this.message.success("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng"),this.modal.destroy(t)):this.message.error("L\u1ed7i: "+t.message)}))}}return t.\u0275fac=function(e){return new(e||t)(h.Nb(h.r),h.Nb(U.a),h.Nb(f.a))},t.\u0275cmp=h.Hb({type:t,selectors:[["app-client-edit-user"]],features:[h.wb],decls:50,vars:23,consts:[[1,"container"],[1,"page-header"],[3,"onClick",4,"ngIf"],[3,"loading","onClick",4,"ngIf"],[3,"popConfirm","onClick"],[3,"formGroup"],[1,"row"],[1,"col-xl-3"],[1,"row","m-v-20"],["nzName","avatar",1,"center",3,"nzShowUploadList","nzChange"],["nzIcon","user",3,"nzSize","nzSrc"],[1,"col-xl-9"],[1,"col-md-6"],["type","text","labelContent","H\u1ecd t\xean","formControlName","fullname","required","true"],["type","text","labelContent","M\xe3","formControlName","code"],["type","text","labelContent","S\u1ed1 CCHN","formControlName","certificateNumber","required",""],["type","datepicker","labelContent","Ng\xe0y c\u1ea5p","formControlName","issueDate","required",""],["type","datepicker","labelContent","Ng\xe0y sinh","formControlName","birthDate"],["type","radio","labelContent","Gi\u1edbi t\xednh","formControlName","gender",3,"radioData"],["type","text","labelContent","Email","formControlName","email","errorTip","Sai \u0111\u1ecbnh d\u1ea1ng email"],["type","text","labelContent","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i","formControlName","phoneNumber","errorTip","Sai \u0111\u1ecbnh d\u1ea1ng S\u0110T"],["type","text","labelContent","S\u1ed1 CMND","formControlName","identificationNumber"],["type","textarea","labelContent","\u0110\u1ecba ch\u1ec9","formControlName","address"],[1,"col-md-12"],["type","radio","labelContent","\u0110\u1ed1i t\u01b0\u1ee3ng","formControlName","type",3,"span","radioData","onChange"],["formControlName","organizationId","required","true",3,"span"],["formControlName","departmentId",3,"organizationId"],["formControlName","titleId"],[3,"onClick"],[3,"loading","onClick"]],template:function(t,e){1&t&&(h.Tb(0,"div",0),h.Tb(1,"div",1),h.Fc(2,R,1,0,"app-button-edit",2),h.Fc(3,G,1,1,"app-button-save",3),h.Tb(4,"app-button-cancel",4),h.ac("onClick",function(){return e.onCancel()}),h.Sb(),h.Sb(),h.Tb(5,"div"),h.Tb(6,"form",5),h.Tb(7,"div",6),h.Tb(8,"div",7),h.Tb(9,"div",8),h.Tb(10,"nz-upload",9),h.ac("nzChange",function(t){return e.isEdit?e.handleChange(t):null}),h.Ob(11,"nz-avatar",10),h.Sb(),h.Sb(),h.Sb(),h.Tb(12,"div",11),h.Tb(13,"div",6),h.Tb(14,"div",12),h.Ob(15,"app-input",13),h.Sb(),h.Tb(16,"div",12),h.Ob(17,"app-input",14),h.Sb(),h.Sb(),h.Tb(18,"div",6),h.Tb(19,"div",12),h.Ob(20,"app-input",15),h.Sb(),h.Tb(21,"div",12),h.Ob(22,"app-input",16),h.Sb(),h.Sb(),h.Tb(23,"div",6),h.Tb(24,"div",12),h.Ob(25,"app-input",17),h.Sb(),h.Tb(26,"div",12),h.Ob(27,"app-input",18),h.Sb(),h.Sb(),h.Tb(28,"div",6),h.Tb(29,"div",12),h.Ob(30,"app-input",19),h.Sb(),h.Tb(31,"div",12),h.Ob(32,"app-input",20),h.Sb(),h.Sb(),h.Tb(33,"div",6),h.Tb(34,"div",12),h.Ob(35,"app-input",21),h.Sb(),h.Tb(36,"div",12),h.Ob(37,"app-input",22),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Ob(38,"nz-divider"),h.Tb(39,"div",6),h.Tb(40,"div",23),h.Tb(41,"app-input",24),h.ac("onChange",function(t){return e.onChangeType(t)}),h.Sb(),h.Sb(),h.Sb(),h.Tb(42,"div",6),h.Tb(43,"div",23),h.Ob(44,"app-select-organization",25),h.Sb(),h.Sb(),h.Tb(45,"div",6),h.Tb(46,"div",12),h.Ob(47,"app-select-department",26),h.Sb(),h.Tb(48,"div",12),h.Ob(49,"app-select-title",27),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Sb()),2&t&&(h.zb(2),h.jc("ngIf",!e.isEdit),h.zb(1),h.jc("ngIf",e.isEdit),h.zb(1),h.jc("popConfirm",!!e.isEdit),h.zb(1),h.Bb(e.isModal?"m-t-30":""),h.zb(1),h.jc("formGroup",e.form),h.zb(4),h.jc("nzShowUploadList",!1),h.zb(1),h.jc("nzSize",200)("nzSrc",e.avatarFileUrl),h.zb(16),h.jc("radioData",h.pc(17,E,h.nc(15,Y),h.nc(16,B))),h.zb(14),h.jc("span",2)("radioData",h.oc(21,Q,h.nc(20,J))),h.zb(3),h.jc("span",2),h.zb(3),h.jc("organizationId",e.form.getRawValue().organizationId))},directives:[o.n,v.a,l.u,l.o,l.i,L.a,x.a,C.a,l.n,l.h,l.s,M.a,A.a,q.a,_.a,V.a,S.a],styles:[""]}),t})();var X=n("Y9CB"),Z=n("ECBP"),W=n("dEAy"),$=n("QH85"),tt=n("JA5x"),et=n("nJia"),nt=n("8+11"),it=n("k8vQ"),at=n("gyL+"),rt=n("zAKX"),ot=n("0lU3"),st=n("rMZv"),lt=n("W9fG"),ct=n("N6wO"),bt=n("b8ej"),ut=n("K143");function dt(t,e){1&t&&(h.Rb(0),h.Tb(1,"app-tag-done"),h.Hc(2,"X\xe1c nh\u1eadn"),h.Sb(),h.Qb())}function ht(t,e){1&t&&(h.Rb(0),h.Tb(1,"app-tag-danger"),h.Hc(2,"H\u1ee7y b\u1ecf"),h.Sb(),h.Qb())}function gt(t,e){1&t&&(h.Rb(0),h.Tb(1,"app-tag-not-done"),h.Hc(2,"Ch\u01b0a duy\u1ec7t"),h.Sb(),h.Qb())}function mt(t,e){if(1&t&&(h.Tb(0,"tr"),h.Tb(1,"td"),h.Hc(2),h.ec(3,"date"),h.Sb(),h.Tb(4,"td"),h.Hc(5),h.Sb(),h.Tb(6,"td"),h.Fc(7,dt,3,0,"ng-container",6),h.Fc(8,ht,3,0,"ng-container",6),h.Fc(9,gt,3,0,"ng-container",6),h.Sb(),h.Tb(10,"td"),h.Hc(11),h.Sb(),h.Sb()),2&t){const t=e.$implicit;h.zb(2),h.Ic(h.gc(3,6,t.createdOnDate,"dd/MM/yyyy")),h.zb(3),h.Ic(t.trainingProgram.name),h.zb(2),h.jc("ngIf","done"==t.trainingProgram.status||1==t.active),h.zb(1),h.jc("ngIf","cancel"==t.trainingProgram.status),h.zb(1),h.jc("ngIf",0==t.active&&"initial"==t.trainingProgram.status),h.zb(2),h.Ic(t.note)}}function pt(t,e){if(1&t&&(h.Rb(0),h.Tb(1,"nz-table",3,4),h.Tb(3,"thead"),h.Tb(4,"tr"),h.Tb(5,"th"),h.Hc(6,"Ng\xe0y g\u1eedi"),h.Sb(),h.Tb(7,"th"),h.Hc(8,"N\u1ed9i dung"),h.Sb(),h.Tb(9,"th"),h.Hc(10,"Tr\u1ea1ng th\xe1i"),h.Sb(),h.Tb(11,"th"),h.Hc(12,"L\xfd do"),h.Sb(),h.Sb(),h.Sb(),h.Tb(13,"tbody"),h.Fc(14,mt,12,9,"tr",5),h.Sb(),h.Sb(),h.Qb()),2&t){const t=h.tc(2),e=h.dc();h.zb(1),h.jc("nzData",e.listData),h.zb(13),h.jc("ngForOf",t.data)}}function ft(t,e){if(1&t){const t=h.Ub();h.Rb(0),h.Tb(1,"button",7),h.ac("click",function(){return h.vc(t),h.dc().onCancel.emit()}),h.Hc(2,"\u0110\xf3ng"),h.Sb(),h.Qb()}}let St=(()=>{class t{constructor(){this.visible=!1,this.listData=[],this.onCancel=new h.n}ngOnInit(){}openModal(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=h.Hb({type:t,selectors:[["app-client-history-request"]],inputs:{visible:"visible",listData:"listData"},outputs:{onCancel:"onCancel"},decls:3,vars:1,consts:[["nzTitle","L\u1ecbch s\u1eed g\u1eedi y\xeau c\u1ea7u",3,"nzVisible","nzVisibleChange","nzOnCancel","nzAfterOpen"],[4,"nzModalContent"],[4,"nzModalFooter"],[3,"nzData"],["basicTable",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["nz-button","","nzType","default",3,"click"]],template:function(t,e){1&t&&(h.Tb(0,"nz-modal",0),h.ac("nzVisibleChange",function(t){return e.visible=t})("nzOnCancel",function(){return e.onCancel.emit()})("nzAfterOpen",function(){return e.openModal()}),h.Fc(1,pt,15,2,"ng-container",1),h.Fc(2,ft,3,0,"ng-container",2),h.Sb()),2&t&&h.jc("nzVisible",e.visible)},directives:[W.a,W.b,W.c,st.b,st.j,st.k,st.a,st.h,st.e,o.m,o.n,ct.a,bt.a,ut.a,P.a,j.a,I.a],pipes:[o.e],styles:[""]}),t})();function vt(t,e){if(1&t&&(h.Tb(0,"tr",56),h.Tb(1,"td",57),h.Hc(2),h.Sb(),h.Tb(3,"td"),h.Hc(4),h.Sb(),h.Tb(5,"td",47),h.Hc(6),h.Sb(),h.Tb(7,"td"),h.Hc(8),h.Sb(),h.Tb(9,"td"),h.Hc(10),h.ec(11,"date"),h.Sb(),h.Tb(12,"td"),h.Hc(13),h.ec(14,"date"),h.Sb(),h.Tb(15,"td"),h.Hc(16),h.Sb(),h.Tb(17,"td",58),h.Hc(18),h.Sb(),h.Sb()),2&t){const t=e.$implicit,n=e.index;h.jc("formGroupName",n)("hidden",t.value.hidden),h.zb(2),h.Jc(" ",n+1," "),h.zb(2),h.Jc(" ",t.value.trainingFormName," "),h.zb(2),h.Jc(" ",t.value.trainingProgramName," "),h.zb(2),h.Jc(" ",t.value.organizationName," "),h.zb(2),h.Jc(" ",h.gc(11,10,t.value.fromDate,"dd/MM/yyyy")," "),h.zb(3),h.Jc(" ",h.gc(14,13,t.value.toDate,"dd/MM/yyyy")," "),h.zb(3),h.Jc(" ",t.value.trainingSubjectName," "),h.zb(2),h.Jc(" ",t.value.amount," ")}}function Tt(t,e){}const Ct=function(){return{standalone:!0}},zt=function(){return["T\u1eeb n\u0103m","\u0110\u1ebfn n\u0103m"]},yt=function(t){return{color:t}},Nt=[{path:"",component:(()=>{class t extends Z.a{constructor(t,e,n,i){super(t),this.userService=e,this.nzModalService=n,this.modalService=i,this.visibleHistory=!1,this.listTrainingProgram=[],this.user=this.tokenService.get()?this.tokenService.get().user:null,this.user&&(this.avatarPath=F.a+"/"+this.user.avatarUrl),this.searchForm=this.formBuilder.group({rangeYear:[[new Date,new Date]]}),this.form=this.formBuilder.group({trainingProgram_Users:this.formBuilder.array([])}),this.fetchList()}get trainingProgram_Users(){return this.form.controls.trainingProgram_Users}addTrainingProgram_UserRow(t){this.trainingProgram_Users.push(this.createTrainingProgram_UserItem(t))}createTrainingProgram_UserItem(t){return this.formBuilder.group({trainingProgramName:[t?t.trainingProgramName:null,[l.t.required]],trainingFormName:[{value:t?t.trainingFormName:null,disabled:!0}],fromDate:[{value:t?t.fromDate:null,disabled:!0}],toDate:[{value:t?t.toDate:null,disabled:!0}],trainingSubjectName:[{value:t?t.trainingSubjectName:null,disabled:!0}],organizationName:[{value:t?t.organizationName:null,disabled:!0}],amount:[t?t.amount:null,[l.t.required]],hidden:[!1]})}fetchList(){if(this.user.id){for(;0!==this.trainingProgram_Users.length;)this.trainingProgram_Users.removeAt(0);this.loading=!0,this.userService.getTrainingPrograms(this.user.id,this.fromYear,this.toYear).toPromise().then(t=>{this.loading=!1,t&&t.success?(this.listTrainingProgram=t.data,console.log(this.listTrainingProgram),t.data.filter(t=>1==t.active).forEach(t=>{this.addTrainingProgram_UserRow({trainingProgramName:t.trainingProgram.name,trainingFormName:t.trainingProgram.trainingForm.name,fromDate:t.trainingProgram.fromDate,toDate:t.trainingProgram.toDate,trainingSubjectName:t.trainingSubjectName,amount:t.amount,organizationName:t.trainingProgram.organization?t.trainingProgram.organization.name:t.trainingProgram.organizationInput})}),this.form.disable()):this.message.error("L\u1ed7i: "+t.message)})}}onSearch(t){this.loading=!0;for(const e in this.trainingProgram_Users.controls){const n=this.trainingProgram_Users.controls[e],i=n.getRawValue();if(t.length>0){let e=!0;t.forEach(t=>{i.trainingProgramName&&i.trainingProgramName.toLowerCase().includes(t.toLowerCase())||i.trainingFormName&&i.trainingFormName.toLowerCase().includes(t.toLowerCase())||i.trainingSubjectName&&i.trainingSubjectName.toLowerCase().includes(t.toLowerCase())||i.amount&&i.amount.toString().toLowerCase().includes(t.toLowerCase())||(e=!1)}),n.controls.hidden.setValue(!e)}else n.controls.hidden.setValue(!1)}this.loading=!1}get year(){return(new Date).getFullYear()}get amoutInYear(){let t=0;return this.trainingProgram_Users.value.forEach(e=>{t+=e.amount}),t}getDepartmentAndOrganization(t,e){let n=t?t+", ":"";return n+=e||"",n}goToEdit(){this.modalService.openDetailModal(K,this.user.id,!0,"1000px","20px").afterClose.toPromise().then(t=>{t&&(this.tokenService.updateUser(t.data),this.user=t.data,this.avatarPath=F.a+"/"+this.user.avatarUrl)})}updateUserInfo(){this.userService.updateUserInfo(this.user.id,this.form.getRawValue(),this.avatarFile).toPromise().then(t=>{t&&t.success?(this.message.remove(),this.message.success("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng"),this.tokenService.updateUser(t.data)):this.message.error("L\u1ed7i: "+t.message)})}goToCreate(){this.modalService.openCreateModal(k,"1000px","20px",!0).afterClose.toPromise().then(t=>{})}changePassword(){return this.nzModalService.create({nzTitle:"\u0110\u1ed5i m\u1eadt kh\u1ea9u",nzContent:X.a,nzComponentParams:{isModal:!0},nzFooter:null})}logout(){this.tokenService.set(null),this.router.navigateByUrl(this.tokenService.login_url)}get fromYear(){return this.searchForm.value.rangeYear[0].getFullYear()}get toYear(){return this.searchForm.value.rangeYear[1].getFullYear()}get totalAmount(){return this.searchForm.value.rangeYear?24*(this.toYear-this.fromYear+1):null}}return t.\u0275fac=function(e){return new(e||t)(h.Nb(h.r),h.Nb(f.a),h.Nb(W.f),h.Nb($.a))},t.\u0275cmp=h.Hb({type:t,selectors:[["ng-component"]],features:[h.wb],decls:118,vars:38,consts:[[1,"container-fluid","p-h-0","p-v-20","h-100","bg",2,"background-image","url('assets/images/others/login-3.png')","background-repeat","no-repeat","background-attachment","fixed"],[1,"d-flex","flex-column","justify-content-between","h-100"],[1,"d-none","d-md-block"],[1,"container",2,"margin","auto"],["id","invoice",1,"p-h-30"],[1,"m-t-15","lh-2"],[1,"row"],[1,"col-md-8"],[1,"col-md-3","center"],["nzIcon","user",3,"nzSize","nzSrc"],[1,"col-md-9"],[1,"p-l-10","m-t-20"],[1,"font-weight-bold","font-size-20","text-highlight"],[1,"icon-edit",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline","nzTooltipTitle","Thay \u0111\u1ed5i th\xf4ng tin","nzTooltipPlacement","topCenter","nz-tooltip",""],[1,"col-md-4"],[1,"float-right"],["nz-button","","nzType","primary",3,"click"],["nz-icon","","nzType","logout","nzTheme","outline"],["nz-icon","","nzType","key","nzTheme","outline"],[1,"row","m-t-20","lh-2","justify-content-between"],[1,"p-l-10","m-t-10"],["iconType","history",3,"onClick"],[3,"onClick"],[3,"formGroup"],[1,"row","m-b-10"],["nzMode","tags","nzPlaceHolder","T\xecm ki\u1ebfm...",1,"w-100",3,"ngModel","ngModelOptions","ngModelChange"],["nzMode","year","formControlName","rangeYear",1,"w-100",3,"nzPlaceHolder","nzAllowClear","ngModelChange"],[1,"row","m-t-20"],[1,"col-sm-12"],[1,"w-100",3,"nzLoading","nzNoResult"],["dynamicTable",""],["width","30px",1,"center"],["width","170px"],["width","100px"],["width","150px"],["width","70px"],["formArrayName","trainingProgram_Users"],[3,"formGroupName","hidden",4,"ngFor","ngForOf"],["class","no-result"],["nzNoResult",""],[1,"row","m-t-30","lh-1-8"],[1,"float-right","text-right"],[3,"nzPercent","nzShowInfo","nzStrokeColor","nzStatus"],[3,"ngStyle"],[1,"m-l-5",3,"innerHTML"],[1,"font-weight-semibold","text-dark","m-t-5","m-r-10"],[1,"text-highlight"],[1,"row","m-t-30","lh-2"],[1,"row","m-v-20"],[1,"col-sm-1"],["alt","","src","assets/images/logo/logo-xanhpon.png",1,"img-fluid","text-opacity","m-t-5",2,"width","50px","height","50px"],[1,"col-sm-5","center"],[1,"m-b-0","float-left"],[1,"col-sm-6","text-right"],[3,"visible","listData","onCancel"],[3,"formGroupName","hidden"],[1,"text-center"],[1,"text-right","font-weight-semibold"]],template:function(t,e){if(1&t&&(h.Tb(0,"div",0),h.Tb(1,"div",1),h.Ob(2,"div",2),h.Tb(3,"div",3),h.Tb(4,"nz-card"),h.Tb(5,"div",4),h.Tb(6,"div",5),h.Tb(7,"div",6),h.Tb(8,"div",7),h.Tb(9,"div",6),h.Tb(10,"div",8),h.Ob(11,"nz-avatar",9),h.Sb(),h.Tb(12,"div",10),h.Tb(13,"address",11),h.Tb(14,"span",12),h.Hc(15),h.ec(16,"uppercase"),h.Sb(),h.Tb(17,"span",13),h.ac("click",function(){return e.goToEdit()}),h.Ob(18,"i",14),h.Hc(19," Ch\u1ec9nh s\u1eeda "),h.Sb(),h.Ob(20,"br"),h.Tb(21,"span"),h.Hc(22,"S\u1ed1 CCHN: "),h.Tb(23,"strong"),h.Hc(24),h.Sb(),h.Sb(),h.Ob(25,"br"),h.Tb(26,"span"),h.Hc(27,"N\u0103m c\u1ea5p: "),h.Tb(28,"strong"),h.Hc(29),h.ec(30,"date"),h.Sb(),h.Sb(),h.Ob(31,"br"),h.Tb(32,"span"),h.Hc(33,"Khoa/ph\xf2ng: "),h.Tb(34,"strong"),h.Hc(35),h.Sb(),h.Sb(),h.Ob(36,"br"),h.Tb(37,"span"),h.Hc(38,"Ch\u1ee9c v\u1ee5: "),h.Tb(39,"strong"),h.Hc(40),h.Sb(),h.Sb(),h.Ob(41,"br"),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Tb(42,"div",15),h.Tb(43,"div",16),h.Tb(44,"button",17),h.ac("click",function(){return e.logout()}),h.Ob(45,"i",18),h.Hc(46," \u0110\u0103ng xu\u1ea5t"),h.Sb(),h.Sb(),h.Tb(47,"div",16),h.Tb(48,"button",17),h.ac("click",function(){return e.changePassword()}),h.Ob(49,"i",19),h.Hc(50," \u0110\u1ed5i m\u1eadt kh\u1ea9u"),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Tb(51,"div",20),h.Tb(52,"h3",21),h.Hc(53,"Ch\u01b0\u01a1ng tr\xecnh \u0111\xe0o t\u1ea1o \u0111\xe3 tham gia"),h.Sb(),h.Tb(54,"div"),h.Tb(55,"app-button-base",22),h.ac("onClick",function(){return e.visibleHistory=!0}),h.Hc(56,"L\u1ecbch s\u1eed"),h.Sb(),h.Tb(57,"app-button-reload",23),h.ac("onClick",function(){return e.fetchList()}),h.Sb(),h.Tb(58,"app-button-create",23),h.ac("onClick",function(){return e.goToCreate()}),h.Sb(),h.Sb(),h.Sb(),h.Tb(59,"form",24),h.Tb(60,"div",25),h.Tb(61,"div",7),h.Tb(62,"nz-select",26),h.ac("ngModelChange",function(t){return e.onSearch(t)}),h.Sb(),h.Sb(),h.Tb(63,"div",15),h.Tb(64,"nz-range-picker",27),h.ac("ngModelChange",function(){return e.fetchList()}),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Tb(65,"div",28),h.Tb(66,"div",29),h.Tb(67,"form",24),h.Tb(68,"nz-table",30,31),h.Tb(70,"thead"),h.Tb(71,"tr"),h.Tb(72,"th",32),h.Hc(73,"STT"),h.Sb(),h.Tb(74,"th",33),h.Hc(75,"H\xecnh th\u1ee9c \u0111\xe0o t\u1ea1o"),h.Sb(),h.Tb(76,"th"),h.Hc(77,"N\u1ed9i dung"),h.Sb(),h.Tb(78,"th",33),h.Hc(79,"\u0110\u01a1n v\u1ecb t\u1ed5 ch\u1ee9c"),h.Sb(),h.Tb(80,"th",34),h.Hc(81,"T\u1eeb ng\xe0y"),h.Sb(),h.Tb(82,"th",34),h.Hc(83,"\u0110\u1ebfn ng\xe0y"),h.Sb(),h.Tb(84,"th",35),h.Hc(85,"\u0110\u1ed1i t\u01b0\u1ee3ng"),h.Sb(),h.Tb(86,"th",36),h.Hc(87,"Quy \u0111\u1ed5i"),h.Sb(),h.Sb(),h.Sb(),h.Tb(88,"tbody",37),h.Fc(89,vt,19,16,"tr",38),h.Sb(),h.Sb(),h.Fc(90,Tt,0,0,"ng-template",39,40,h.Gc),h.Sb(),h.Tb(92,"div",41),h.Tb(93,"div",29),h.Tb(94,"div",42),h.Tb(95,"p"),h.Ob(96,"nz-progress",43),h.Tb(97,"strong"),h.Hc(98),h.Sb(),h.Hc(99),h.Tb(100,"span",44),h.Hc(101),h.Sb(),h.Ob(102,"span",45),h.Sb(),h.Tb(103,"h3"),h.Tb(104,"span",46),h.Hc(105,"T\u1ed5ng s\u1ed1 ti\u1ebft:"),h.Sb(),h.Tb(106,"span",47),h.Hc(107),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Tb(108,"div",48),h.Ob(109,"div",29),h.Sb(),h.Tb(110,"div",49),h.Tb(111,"div",50),h.Ob(112,"img",51),h.Sb(),h.Tb(113,"div",52),h.Tb(114,"p",53),h.Hc(115),h.Sb(),h.Sb(),h.Ob(116,"div",54),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Sb(),h.Tb(117,"app-client-history-request",55),h.ac("onCancel",function(){return e.visibleHistory=!1}),h.Sb()),2&t){const t=h.tc(91);h.zb(11),h.jc("nzSize",150)("nzSrc",e.avatarFileUrl?e.avatarFileUrl:e.avatarPath?e.avatarPath:null),h.zb(4),h.Ic(h.fc(16,29,e.user.fullname)),h.zb(9),h.Ic(e.user.certificateNumber),h.zb(5),h.Ic(h.gc(30,31,e.user.issueDate,"dd/MM/yyyy")),h.zb(6),h.Ic(e.getDepartmentAndOrganization(null==e.user.department?null:e.user.department.name,null==e.user.organization?null:e.user.organization.name)),h.zb(5),h.Ic(null==e.user.title?null:e.user.title.name),h.zb(19),h.jc("formGroup",e.searchForm),h.zb(3),h.jc("ngModel",e.listTextSearch)("ngModelOptions",h.nc(34,Ct)),h.zb(2),h.jc("nzPlaceHolder",h.nc(35,zt))("nzAllowClear",!1),h.zb(3),h.jc("formGroup",e.form),h.zb(1),h.jc("nzLoading",e.loading)("nzNoResult",t),h.zb(21),h.jc("ngForOf",e.trainingProgram_Users.controls),h.zb(7),h.jc("nzPercent",e.amoutInYear/e.totalAmount*100)("nzShowInfo",e.userService.showInfo(e.amoutInYear,e.totalAmount))("nzStrokeColor",e.userService.getColor(e.amoutInYear,e.totalAmount))("nzStatus",e.userService.getStatus(e.amoutInYear,e.totalAmount)),h.zb(2),h.Ic(e.amoutInYear),h.zb(1),h.Jc("/",e.totalAmount," - "),h.zb(1),h.jc("ngStyle",h.oc(36,yt,e.userService.getColor(e.amoutInYear,e.totalAmount))),h.zb(1),h.Ic(e.userService.getTextStatus(e.amoutInYear,e.totalAmount)),h.zb(1),h.jc("innerHTML",e.userService.getHtmlRemain(e.amoutInYear,e.totalAmount),h.wc),h.zb(5),h.Jc(" ",e.amoutInYear,""),h.zb(8),h.Jc("Copyright \xa9 ",e.year,". All rights reserved."),h.zb(2),h.jc("visible",e.visibleHistory)("listData",e.listTrainingProgram)}},directives:[tt.a,x.a,I.a,O.a,et.d,P.a,j.a,nt.a,it.a,at.a,l.u,l.o,l.i,rt.b,l.n,l.q,ot.b,ot.d,l.h,st.b,st.j,st.k,st.a,st.h,st.e,l.e,o.m,lt.a,o.o,St,l.j],pipes:[o.w,o.e],styles:[".icon-edit[_ngcontent-%COMP%]{margin-left:10px;color:#72849a}.icon-edit[_ngcontent-%COMP%]:hover{color:#2f54eb;cursor:pointer}"]}),t})()}];let Pt=(()=>{class t{}return t.\u0275mod=h.Lb({type:t}),t.\u0275inj=h.Kb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(Nt)],c.i]}),t})();var jt=n("hMaZ"),It=n("jdXR"),wt=n("el8y");let Ot=(()=>{class t{}return t.\u0275mod=h.Lb({type:t}),t.\u0275inj=h.Kb({factory:function(e){return new(e||t)},imports:[[o.c,s.a,l.r,r.a,Pt,a.AuthenticationModule,wt.TitleModule,It.OrganizationModule,jt.DepartmentModule,i.TrainingFormModule]]}),t})()}}]);