(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{TDBs:function(e,t,a){"use strict";a.r(t),a.d(t,"DashboardModule",function(){return Q});var r=a("jdj2"),i=a("uRpX"),n=a("PCNd"),o=a("tyNb"),s=a("GHWL"),l=a("ECBP"),c=a("fXoL"),b=a("PQ0Y"),m=a("AytR"),p=a("tk/3");let d=(()=>{class e{constructor(e){this.httpClient=e,this.serviceUrl=m.a.BASE_API_URL+"/api/report"}getTotal(){return this.httpClient.get(this.serviceUrl+"/total")}}return e.\u0275fac=function(t){return new(t||e)(c.Xb(p.c))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=a("hrsj"),h=a("ZE2D"),g=a("C2AL"),v=a("FwiY"),f=a("JA5x"),T=a("Nqz0"),S=a("Q8cG"),z=a("7VIp"),y=a("3Pt+");let C=(()=>{class e{constructor(e){this.httpClient=e,this.serviceUrl=m.a.BASE_API_URL+"/api/export"}exportTotalByDepartment(e){return this.httpClient.post(this.serviceUrl+"/report-total-by-department",{year:e},{responseType:"arraybuffer"})}}return e.\u0275fac=function(t){return new(t||e)(c.Xb(p.c))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var w=a("QlUG"),x=a("ofXK"),j=a("Mb3Z");function k(e,t){1&e&&(c.Tb(0,"div",4),c.Ob(1,"app-input",9),c.Sb()),2&e&&(c.zb(1),c.jc("dateAllowClear",!1))}let N=(()=>{class e extends l.a{constructor(e,t){super(e),this.exportService=t,this.loading=!1,this.reportSelectData=[{id:"report-total-by-department",label:"B\xe1o c\xe1o t\u1ed5ng theo khoa ph\xf2ng"}]}ngOnInit(){this.filterForm=this.formBuilder.group({reportType:[null,y.s.required],toYear:[(new Date).getFullYear().toString()],fromYear:[(new Date).getFullYear().toString()],year:[(new Date).getFullYear().toString()]})}submit(){for(const e in this.filterForm.controls)this.filterForm.controls[e].markAsDirty(),this.filterForm.controls[e].updateValueAndValidity();if(this.filterForm.valid){let e=this.filterForm.value.year;switch(e instanceof Date&&(e=e.getFullYear()),this.filterForm.value.reportType){case"report-total-by-department":this.loading=!0,this.exportService.exportTotalByDepartment(e).toPromise().then(e=>{Object(z.b)(e,"B\xe1o c\xe1o t\u1ed5ng khoa ph\xf2ng.zip"),this.loading=!1})}}}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(c.r),c.Nb(C))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-report"]],features:[c.wb],decls:10,vars:4,consts:[[1,"d-md-flex","justify-content-space","m-t-50"],[1,"completion-chart","p-r-10",2,"height","330px","width","600px"],[3,"formGroup"],[1,"row"],[1,"col-md-12"],["type","select","formControlName","reportType","labelContent","M\u1eabu b\xe1o c\xe1o","labelField","label","required","",3,"selectData"],["class","col-md-12",4,"ngIf"],[1,"calendar-card","border-0"],[3,"loading","onClick"],["type","datepicker","formControlName","year","dateMode","year","labelContent","N\u0103m x\xe9t",3,"dateAllowClear"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"form",2),c.Tb(3,"div",3),c.Tb(4,"div",4),c.Ob(5,"app-input",5),c.Sb(),c.Cc(6,k,2,1,"div",6),c.Sb(),c.Sb(),c.Sb(),c.Tb(7,"div",7),c.Tb(8,"app-button-export",8),c.ac("onClick",function(){return t.submit()}),c.Ec(9,"Th\u1ef1c hi\u1ec7n"),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.zb(2),c.jc("formGroup",t.filterForm),c.zb(3),c.jc("selectData",t.reportSelectData),c.zb(1),c.jc("ngIf","report-total-by-department"==t.filterForm.value.reportType),c.zb(2),c.jc("loading",t.loading))},directives:[y.t,y.o,y.i,w.a,y.n,y.h,y.r,x.n,j.a],styles:[""]}),e})();var D=a("1XBi"),O=a("CFL1"),A=a("2I5R"),L=a("AVD9"),M=a("D9mS");const P=function(){return{label:"Nam",value:1}},F=function(){return{label:"N\u1eef",value:0}},I=function(e,t){return[e,t]};let E=(()=>{class e extends D.a{constructor(e,t){super(e),this.userService=t}ngOnInit(){this.form=this.formBuilder.group({username:[null,y.s.required],fullname:[null,y.s.required],birthDate:[null],gender:[null],email:[null,y.s.email],phoneNumber:[null,y.s.pattern(s.b)],avatarUrl:[null],address:[null],identificationNumber:[null],isSuperAdmin:[!0]}),this.onChangeType("internal")}handleChange(e){this.avatarFile=e.file.originFileObj,this.getBase64(e.file.originFileObj,e=>{this.avatarFileUrl=e})}getBase64(e,t){const a=new FileReader;a.addEventListener("load",()=>t(a.result)),a.readAsDataURL(e)}onChangeType(e){"internal"==e?(this.form.controls.organizationId.setValue(m.a.INTERNAL_ORGANIZATION_ID),this.form.controls.organizationId.disable(),this.form.controls.identificationNumber.setValidators([]),this.form.controls.certificateNumber.setValidators([y.s.required]),this.form.controls.issueDate.setValidators([y.s.required])):"external"==e&&(this.form.controls.organizationId.setValue(null),this.form.controls.organizationId.enable(),this.form.controls.identificationNumber.setValidators([y.s.required]),this.form.controls.certificateNumber.setValidators([]),this.form.controls.issueDate.setValidators([]))}onSave(){for(const e in this.form.controls)this.form.controls[e].markAsDirty(),this.form.controls[e].updateValueAndValidity();this.form.valid&&(this.loading=!0,this.userService.create(this.form.getRawValue(),this.avatarFile).toPromise().then(e=>{this.loading=!1,e&&e.success?this.isModal&&(this.message.success("T\u1ea1o m\u1edbi th\xe0nh c\xf4ng"),this.modal.destroy(e.data)):this.message.error("L\u1ed7i: "+e.message)}))}onCancel(){this.isModal&&this.modal.destroy()}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(c.r),c.Nb(O.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-create-super-admin"]],features:[c.wb],decls:32,vars:15,consts:[[1,"container"],[1,"page-header"],[3,"loading","onClick"],[3,"onClick"],[3,"formGroup"],[1,"row"],[1,"col-xl-3"],[1,"row","m-v-20"],["nzName","avatar",1,"center",3,"nzShowUploadList","nzChange"],["nzIcon","user",3,"nzSize","nzSrc"],[1,"col-xl-9"],[1,"col-md-6"],["type","text","labelContent","T\xe0i kho\u1ea3n","formControlName","username","required","true"],["type","text","labelContent","H\u1ecd t\xean","formControlName","fullname","required","true"],["type","datepicker","labelContent","Ng\xe0y sinh","formControlName","birthDate"],["type","radio","labelContent","Gi\u1edbi t\xednh","formControlName","gender",3,"radioData"],["type","text","labelContent","Email","formControlName","email","errorTip","Sai \u0111\u1ecbnh d\u1ea1ng email"],["type","text","labelContent","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i","formControlName","phoneNumber","errorTip","Sai \u0111\u1ecbnh d\u1ea1ng S\u0110T"],["type","text","labelContent","S\u1ed1 CMND","formControlName","identificationNumber",3,"required"],["type","textarea","labelContent","\u0110\u1ecba ch\u1ec9","formControlName","address"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"app-button-save",2),c.ac("onClick",function(){return t.onSave()}),c.Sb(),c.Tb(3,"app-button-cancel",3),c.ac("onClick",function(){return t.onCancel()}),c.Sb(),c.Sb(),c.Tb(4,"div"),c.Tb(5,"form",4),c.Tb(6,"div",5),c.Tb(7,"div",6),c.Tb(8,"div",7),c.Tb(9,"nz-upload",8),c.ac("nzChange",function(e){return t.handleChange(e)}),c.Ob(10,"nz-avatar",9),c.Sb(),c.Sb(),c.Sb(),c.Tb(11,"div",10),c.Tb(12,"div",5),c.Tb(13,"div",11),c.Ob(14,"app-input",12),c.Sb(),c.Tb(15,"div",11),c.Ob(16,"app-input",13),c.Sb(),c.Sb(),c.Tb(17,"div",5),c.Tb(18,"div",11),c.Ob(19,"app-input",14),c.Sb(),c.Tb(20,"div",11),c.Ob(21,"app-input",15),c.Sb(),c.Sb(),c.Tb(22,"div",5),c.Tb(23,"div",11),c.Ob(24,"app-input",16),c.Sb(),c.Tb(25,"div",11),c.Ob(26,"app-input",17),c.Sb(),c.Sb(),c.Tb(27,"div",5),c.Tb(28,"div",11),c.Ob(29,"app-input",18),c.Sb(),c.Tb(30,"div",11),c.Ob(31,"app-input",19),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.zb(2),c.jc("loading",t.loading),c.zb(2),c.Bb(t.isModal?"m-t-30":""),c.zb(1),c.jc("formGroup",t.form),c.zb(4),c.jc("nzShowUploadList",!1),c.zb(1),c.jc("nzSize",200)("nzSrc",t.avatarFileUrl),c.zb(11),c.jc("radioData",c.nc(12,I,c.lc(10,P),c.lc(11,F))),c.zb(8),c.jc("required","external"==t.form.value.type))},directives:[A.a,L.a,y.t,y.o,y.i,M.a,h.a,w.a,y.n,y.h,y.r],styles:[""]}),e})();var B=a("QH85"),R=a("nJia");function U(e,t){if(1&e&&(c.Tb(0,"a",7),c.Ob(1,"nz-avatar",8),c.Sb()),2&e){const e=t.$implicit,a=c.dc();c.jc("nzTooltipTitle",e.fullname),c.zb(1),c.jc("nzSize",35)("nzSrc",e.avatarUrl?a.avatar(e):null)}}let V=(()=>{class e extends l.a{constructor(e,t,a){super(e),this.userService=t,this.modalService=a,this.superAdmins=[]}ngOnInit(){this.getSuperAdmins()}avatar(e){return s.a+"/"+e.avatarUrl}getSuperAdmins(){this.userService.getAllSuperAdmin().toPromise().then(e=>{e&&e.success?this.superAdmins=e.data:this.message.error(e.message)})}openCreateSuperAdmin(){this.modalService.openCreateModal(E,"1000px","20px").afterClose.toPromise().then(e=>{e&&this.getSuperAdmins()})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(c.r),c.Nb(O.a),c.Nb(B.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-list-super-admin"]],features:[c.wb],decls:9,vars:2,consts:[[1,"d-flex","justify-content-between","align-items-center"],[1,"mb-0"],[1,"m-t-30"],[1,"avatar-text","m-l-5"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","","nzTooltipTitle","Th\xeam qu\u1ea3n tr\u1ecb vi\xean",3,"click"],["nzIcon","plus",1,"ant-avatar-blue",3,"nzSize"],["nz-tooltip","",3,"nzTooltipTitle"],["nzIcon","user",3,"nzSize","nzSrc"]],template:function(e,t){1&e&&(c.Tb(0,"nz-card"),c.Tb(1,"div",0),c.Tb(2,"h5",1),c.Ec(3,"Qu\u1ea3n tr\u1ecb vi\xean"),c.Sb(),c.Sb(),c.Tb(4,"div",2),c.Tb(5,"div",3),c.Cc(6,U,2,3,"a",4),c.Tb(7,"a",5),c.ac("click",function(){return t.openCreateSuperAdmin()}),c.Ob(8,"nz-avatar",6),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.zb(6),c.jc("ngForOf",t.superAdmins),c.zb(2),c.jc("nzSize",35))},directives:[f.a,x.m,R.d,h.a],styles:[""]}),e})();var G=a("fseX"),H=a("OzZK");function q(e,t){if(1&e&&(c.Tb(0,"div",5),c.Tb(1,"div",6),c.Ob(2,"nz-avatar",7),c.Sb(),c.Tb(3,"div",8),c.Tb(4,"h5",9),c.Tb(5,"a",10),c.Ec(6),c.Sb(),c.Sb(),c.Tb(7,"p",9),c.Ec(8),c.ec(9,"date"),c.ec(10,"date"),c.Sb(),c.Sb(),c.Sb()),2&e){const e=t.$implicit,a=t.index,r=c.dc();c.zb(2),c.kc("nzText",e.totalParticipant),c.jc("ngClass",r.getColor(a)),c.zb(4),c.Fc(e.name),c.zb(2),c.Hc("T\u1eeb ng\xe0y: ",c.gc(9,5,e.fromDate,"dd/MM/yyyy")," - \u0110\u1ebfn ng\xe0y: ",c.gc(10,8,e.toDate,"dd/MM/yyyy"),"")}}let W=(()=>{class e extends l.a{constructor(e,t,a){super(e),this.trainingProgramService=t,this.router=a,this.inprogressTrp=[]}ngOnInit(){this.getInprogressTrp()}getInprogressTrp(){this.trainingProgramService.getList(1,3,"-ToDate","{}",null,null,"00000000-0000-0000-0000-200000000001",!0).toPromise().then(e=>{e&&e.success?this.inprogressTrp=e.data.content:this.message.error(e.message)})}goToTrainingProgram(){this.router.navigate(["/training-program",{trainingFormId:"00000000-0000-0000-0000-200000000001"}])}getColor(e){switch(e){case 0:return"ant-avatar-blue";case 1:return"ant-avatar-cyan";case 2:return"ant-avatar-gold"}}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(c.r),c.Nb(G.a),c.Nb(o.e))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-inprogress-training-program"]],features:[c.wb],decls:9,vars:1,consts:[[1,"d-flex","justify-content-between","align-items-center"],[1,"mb-0"],["nz-button","","nzSize","small",3,"click"],[1,"m-t-30"],["class","d-flex m-b-20",4,"ngFor","ngForOf"],[1,"d-flex","m-b-20"],[1,"text-center"],["nzShape","square","nzSize","large",1,"font-size-20",3,"nzText","ngClass"],[1,"m-l-20"],[1,"m-b-0"],[1,"text-dark"]],template:function(e,t){1&e&&(c.Tb(0,"nz-card"),c.Tb(1,"div",0),c.Tb(2,"h5",1),c.Ec(3,"Cu\u1ed9c h\u1ed9i th\u1ea3o s\u1eafp t\u1edbi"),c.Sb(),c.Tb(4,"div"),c.Tb(5,"a",2),c.ac("click",function(){return t.goToTrainingProgram()}),c.Ec(6,"Xem t\u1ea5t c\u1ea3"),c.Sb(),c.Sb(),c.Sb(),c.Tb(7,"div",3),c.Cc(8,q,11,11,"div",4),c.Sb(),c.Sb()),2&e&&(c.zb(8),c.jc("ngForOf",t.inprogressTrp))},directives:[f.a,H.a,g.a,x.m,h.a,x.l],pipes:[x.e],styles:[""]}),e})();const X=["completionChart"],Y=[{path:"home",component:(()=>{class e extends l.a{constructor(e,t,a,r,i){super(e),this.colorConfig=t,this.reportService=a,this.tokenService=r,this.router=i,this.themeColors=this.colorConfig.get().colors,this.blue=this.themeColors.blue,this.blueLight=this.themeColors.blueLight,this.cyan=this.themeColors.cyan,this.cyanLight=this.themeColors.cyanLight,this.gold=this.themeColors.gold,this.purple=this.themeColors.purple,this.purpleLight=this.themeColors.purpleLight,this.red=this.themeColors.red,this.transparent=this.themeColors.transparent,this.completionChartData=[{data:[30,60,40,50,40,55,85,65,75,50,70],label:"Series A"}],this.currentcompletionChartLabelsIdx=1,this.completionChartLabels=["16th","17th","18th","19th","20th","21th","22th","23th","24th","25th","26th"],this.completionChartOptions={maintainAspectRatio:!1,responsive:!0,hover:{mode:"nearest",intersect:!0},tooltips:{mode:"index"},elements:{line:{tension:0,borderWidth:2}},scales:{xAxes:[{gridLines:[{display:!1}],ticks:{display:!0,fontColor:this.themeColors.grayLight,fontSize:13,padding:10}}],yAxes:[{gridLines:{drawBorder:!1,drawTicks:!1,borderDash:[3,4],zeroLineWidth:1,zeroLineBorderDash:[3,4]},ticks:{display:!0,max:100,stepSize:20,fontColor:this.themeColors.grayLight,fontSize:13,padding:10}}]}},this.completionChartType="line",this.projectList=[{project:"Mind Cog App",avatar:"assets/images/others/thumb-1.jpg",status:"Ready",tasks:"31",progress:100},{project:"Mill Estate",avatar:"assets/images/others/thumb-2.jpg",status:"In Progress",tasks:"56",progress:76},{project:"Eastern Sack",avatar:"assets/images/others/thumb-3.jpg",status:"In Progress",tasks:"21",progress:87},{project:"Fortier Studio",avatar:"assets/images/others/thumb-5.jpg",status:"In Progress",tasks:"18",progress:68},{project:"Indi Web",avatar:"assets/images/others/thumb-6.jpg",status:"Behind",tasks:"165",progress:28}],this.memberList=[{name:"Erin Gonzales",img:"assets/images/avatars/thumb-1.jpg",mail:"erin.gon@gmail.com"},{name:"Darryl Day",img:"assets/images/avatars/thumb-2.jpg",mail:"darryl.d@gmail.com"},{name:"Marshall Nichols",img:"assets/images/avatars/thumb-3.jpg",mail:"marshalln@gmail.com"},{name:"Virgil Gonzales",img:"assets/images/avatars/thumb-4.jpg",mail:"virgil14@gmail.com"},{name:"Nicole Wyne",img:"assets/images/avatars/thumb-5.jpg",mail:"nicolew@gmail.com"},{name:"Riley Newman",img:"assets/images/avatars/thumb-6.jpg",mail:"rileyn93@gmail.com"},{name:"Pamela Wanda",img:"assets/images/avatars/thumb-7.jpg",mail:"pamelaw@gmail.com"}],this.activityList=[{name:"Virgil Gonzales",date:"10:44 PM",action:"Complete task",target:"Prototype Design",actionType:"completed"},{name:"Marshall Nichols",date:"10:44 PM",action:"Complete task",target:"Documentation",actionType:"completed"},{name:"Virgil Gonzales",date:"8:34 PM",action:"Commented",target:"'That's not our work",actionType:"comment"},{name:"Pamela Wanda",date:"8:34 PM",action:"Removed",target:"a file",actionType:"removed"},{name:"Lilian Stone",date:"8:34 PM",action:"Attached file",target:"Mockup Zip",actionType:"upload"},{name:"Marshall Nichols",date:"10:44 PM",action:"Complete task",target:"UI Revamp",actionType:"completed"},{name:"Riley Newman",date:"8:34 PM",action:"Commented",target:"'Hi, please done this before tommorow'",actionType:"comment"},{name:"Erin Gonzales",date:"10:44 PM",action:"Complete task",target:"UI Revamp",actionType:"completed"},{name:"Pamela Wanda",date:"11:25 PM",action:"Complete task",target:"Clean Up Workspace",actionType:"completed"},{name:"Nicole Wyne",date:"8:25 PM",action:"Complete task",target:"Create Workspace",actionType:"completed"}],this.tasksList=[{name:"Erin Gonzales",avatar:"assets/images/avatars/thumb-1.jpg",due:"24 Mar, 2019",status:"Medium",title:"Define users and workflow",desc:"A cheeseburger is more than sandwich"},{name:"Virgil Gonzales",avatar:"assets/images/avatars/thumb-4.jpg",due:"27 Mar, 2019",status:"Medium",title:"Change interface",desc:"Efficiently unleash cross-media information"},{name:"Nicole Wyne",avatar:"assets/images/avatars/thumb-5.jpg",due:"29 Mar, 2019",status:"Low",title:"Create databases",desc:"Here's the story of a man named Brady"},{name:"Darryl Day",avatar:"assets/images/avatars/thumb-2.jpg",due:"2 Apr, 2019",status:"High",title:"Verify connectivity",desc:"Bugger bag egg's old boy willy jolly"},{name:"Riley Newman",avatar:"assets/images/avatars/thumb-6.jpg",due:"7 Apr, 2019",status:"Medium",title:"Prepare implementation",desc:"Drop in axle roll-in rail slide"}]}ngOnInit(){this.tokenService.get()?this.getTotal():this.router.navigate(["authentication/login"]);let e=this.canvas.nativeElement.getContext("2d").createLinearGradient(0,30,10,320);e.addColorStop(0,this.blueLight),e.addColorStop(1,this.transparent),this.completionChartColors=[{backgroundColor:e,borderColor:this.blue,pointBackgroundColor:this.blue,pointBorderColor:this.themeColors.white,pointHoverBackgroundColor:this.blueLight,pointHoverBorderColor:this.blueLight}]}getTotal(){this.reportService.getTotal().toPromise().then(e=>{e&&e.success?this.total=e.data:this.message.error(e.message)})}getAvatar(e){return s.a+"/"+e.avatarUrl}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(c.r),c.Nb(b.a),c.Nb(d),c.Nb(u.a),c.Nb(o.e))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-dashboard"]],viewQuery:function(e,t){if(1&e&&c.xc(X,!0),2&e){let e;c.qc(e=c.bc())&&(t.canvas=e.first)}},features:[c.wb],decls:67,vars:10,consts:[[1,"page-header"],[1,"d-md-flex","align-items-md-center","justify-content-between"],[1,"media","m-v-10","align-items-center"],["nzIcon","user",3,"nzSize","nzSrc"],[1,"media-body","m-l-15"],[1,"m-b-0"],[1,"text-gray"],[1,"d-md-flex","align-items-center","d-none"],[1,"media","align-items-center","m-r-40","m-v-5"],[1,"font-size-27"],["nz-icon","","nzType","profile","theme","outline",1,"text-primary"],[1,"d-flex","align-items-center","m-l-10"],[1,"m-b-0","m-r-5"],["nz-icon","","nzType","appstore","theme","outline",1,"text-success"],[1,"media","align-items-center","m-v-5"],["nz-icon","","nzType","team","theme","outline",1,"text-danger"],[1,"row"],[1,"col-lg-8"],[1,"d-flex","justify-content-between","align-items-center"],[1,"mb-0"],["nz-icon","","nzType","project","nzTheme","outline"],["nz-dropdown","",1,"text-dark","font-size-20",3,"nzTrigger","nzPlacement","nzDropdownMenu"],["nz-icon","","nzType","ellipsis","theme","outline"],["projectCompletionDropDown","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["nz-icon","","nzType","printer","theme","outline"],[1,"m-l-5"],["nz-icon","","nzType","download","theme","outline"],["nz-icon","","nzType","file-excel","theme","outline"],["nz-icon","","nzType","reload","theme","outline"],[1,"col-lg-4"]],template:function(e,t){if(1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Ob(3,"nz-avatar",3),c.Tb(4,"div",4),c.Tb(5,"h4",5),c.Ec(6),c.Sb(),c.Tb(7,"span",6),c.Ec(8),c.Sb(),c.Sb(),c.Sb(),c.Tb(9,"div",7),c.Tb(10,"div",8),c.Tb(11,"div",9),c.Ob(12,"i",10),c.Sb(),c.Tb(13,"div",11),c.Tb(14,"h2",12),c.Ec(15),c.Sb(),c.Tb(16,"span",6),c.Ec(17,"Cu\u1ed9c h\u1ed9i th\u1ea3o"),c.Sb(),c.Sb(),c.Sb(),c.Tb(18,"div",8),c.Tb(19,"div",9),c.Ob(20,"i",13),c.Sb(),c.Tb(21,"div",11),c.Tb(22,"h2",12),c.Ec(23),c.Sb(),c.Tb(24,"span",6),c.Ec(25,"\u0110\u01a1n v\u1ecb"),c.Sb(),c.Sb(),c.Sb(),c.Tb(26,"div",14),c.Tb(27,"div",9),c.Ob(28,"i",15),c.Sb(),c.Tb(29,"div",11),c.Tb(30,"h2",12),c.Ec(31),c.Sb(),c.Tb(32,"span",6),c.Ec(33,"C\xe1n b\u1ed9"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(34,"div",16),c.Tb(35,"div",17),c.Tb(36,"nz-card"),c.Tb(37,"div",18),c.Tb(38,"h5",19),c.Ob(39,"i",20),c.Ec(40," Tr\xedch xu\u1ea5t b\xe1o c\xe1o"),c.Sb(),c.Tb(41,"div"),c.Tb(42,"a",21),c.Ob(43,"i",22),c.Sb(),c.Tb(44,"nz-dropdown-menu",null,23),c.Tb(46,"ul",24),c.Tb(47,"li",25),c.Ob(48,"i",26),c.Tb(49,"span",27),c.Ec(50,"Print"),c.Sb(),c.Sb(),c.Tb(51,"li",25),c.Ob(52,"i",28),c.Tb(53,"span",27),c.Ec(54,"Download"),c.Sb(),c.Sb(),c.Tb(55,"li",25),c.Ob(56,"i",29),c.Tb(57,"span",27),c.Ec(58,"Export"),c.Sb(),c.Sb(),c.Tb(59,"li",25),c.Ob(60,"i",30),c.Tb(61,"span",27),c.Ec(62,"Refresh"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ob(63,"app-report"),c.Sb(),c.Sb(),c.Tb(64,"div",31),c.Ob(65,"app-list-super-admin"),c.Ob(66,"app-inprogress-training-program"),c.Sb(),c.Sb()),2&e){const e=c.rc(45);c.zb(3),c.jc("nzSize",50)("nzSrc",t.getAvatar(t.tokenService.user)),c.zb(3),c.Gc("Xin ch\xe0o, ",null==t.tokenService.user?null:t.tokenService.user.fullname,"!"),c.zb(2),c.Fc(null==t.tokenService.user||null==t.tokenService.user.title?null:t.tokenService.user.title.name),c.zb(7),c.Fc(t.total?t.total.totalHTHN:0),c.zb(8),c.Fc(t.total?t.total.totalOrganization:0),c.zb(8),c.Fc(t.total?t.total.totalUser:0),c.zb(11),c.jc("nzTrigger","click")("nzPlacement","bottomRight")("nzDropdownMenu",e)}},directives:[h.a,g.a,v.a,f.a,T.b,T.c,T.e,S.c,S.e,N,V,W],encapsulation:2}),e})(),data:{title:"Dashboard ",headerDisplay:"none"}}];let J=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[o.i.forChild(Y)],o.i]}),e})(),Q=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},providers:[],imports:[[n.a,J,i.a,r.a]]}),e})()}}]);