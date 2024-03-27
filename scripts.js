function lbl_create(tagname,attr,attr_val,content){
    let ele = document.createElement(tagname)
    ele.setAttribute(attr,attr_val)
    ele.innerHTML=content
    return ele
}

function brk_create(){
    let lbl_brk = document.createElement("br");
    return lbl_brk
}

function inp_create(tagname,attr,attr_val,idname){
    let in_em = document.createElement(tagname);
    in_em.setAttribute(attr,attr_val);
    in_em.id = idname;
    return in_em
}

function txt_ar_create(tagname,attr,attr_val,idname){
    let txt_ar = document.createElement(tagname);
    txt_ar.setAttribute(attr,attr_val);
    txt_ar.id = idname;
    return txt_ar
}

function sub_create(tagname,attr1,attr_val,attr2,attr2_val,event,ev_val){
    let sub = document.createElement(tagname)
    sub.setAttribute(attr1,attr_val)
    sub.setAttribute(attr2,attr2_val)
    sub.setAttribute(event,ev_val)
    return sub
}

function result(){
let f_nm = document.getElementById("f_name").value;
console.log(f_nm);
let m_nm = document.getElementById("m_name").value;
console.log(m_nm);
let l_nm = document.getElementById("l_name").value;
console.log(l_nm);
let em = document.getElementById("email").value;
console.log(em);
let ad = document.getElementById("addr").value;
console.log(ad);
}


let f_name = lbl_create("label","for","f_name","First Name")
let fn_brk = brk_create()
let fn_inp = inp_create("input","type","text","f_name")
let fn_in_brk = brk_create()

let m_name = lbl_create("label","for","m_name","Middle Name")
let mn_brk = brk_create()
let mn_inp = inp_create("input","type","text","m_name")
let mn_in_brk = brk_create()

let l_name = lbl_create("label","for","l_name","Last Name")
let ln_brk = brk_create()
let ln_inp = inp_create("input","type","text","l_name")
let ln_in_brk = brk_create()

let em = lbl_create("label","for","email","Email")
let em_brk = brk_create()
let em_inp = inp_create("input","type","text","email")
let em_in_brk = brk_create()

let pwd = lbl_create("label","for","pass","Password")
let pwd_brk = brk_create()
let pwd_inp = inp_create("input","type","text","pass")
let pwd_in_brk = brk_create()

let addr = lbl_create("label","for","addr","Address")
let addr_brk = brk_create()
let addr_tx = txt_ar_create("textarea","type","text","addr")
let addr_tx_brk = brk_create()

let sub_brk = brk_create()
let subm = sub_create("input","type","submit","value","Submit","onClick","result()")

document.body.append(f_name,fn_brk,fn_inp,fn_in_brk,m_name,
    mn_brk,mn_inp,mn_in_brk,l_name,ln_brk,ln_inp,ln_in_brk,em,em_brk,em_inp,em_in_brk,
    pwd,pwd_brk,pwd_inp,pwd_in_brk,addr,addr_brk,addr_tx,addr_tx_brk,sub_brk,subm)