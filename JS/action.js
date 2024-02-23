//Load trigger
document.addEventListener('DOMContentLoaded', boot())

//Main buttons
document.getElementById('finger').addEventListener('click', finger)
document.getElementById('man').addEventListener('click', man)
document.getElementById('find').addEventListener('click', find)
document.getElementById('ls').addEventListener('click', ls)
document.getElementById('rev').addEventListener('click', goa)
document.getElementById('cat').addEventListener('click', cat)

//q button
document.getElementById('q').addEventListener('click',clearPage)

//option bar file buttons
document.getElementById('home').addEventListener('click', clearPage)
document.getElementById('about').addEventListener('click', finger)
document.getElementById('skill').addEventListener('click', man)
document.getElementById('projects').addEventListener('click', find)
document.getElementById('qua').addEventListener('click', ls)
document.getElementById('place').addEventListener('click', goa)
document.getElementById('links').addEventListener('click', cat)

//option bar Terminal buttons
document.getElementById('reboot').addEventListener('click', Reload)
document.getElementById('clear').addEventListener('click', clearPage)

//option bar help buttons
document.getElementById('command').addEventListener('click', help)

//Modal monitering
document.getElementById('Intune').addEventListener('click',function(e){ModelText('Intune')})
document.getElementById('TeamsBot').addEventListener('click',function(e){ModelText('TeamsBot')})
document.getElementById('NewStarter').addEventListener('click',function(e){ModelText('NewStarter')})
document.getElementById('Sharepoint').addEventListener('click',function(e){ModelText('Sharepoint')})
document.getElementById('Helpdesk').addEventListener('click',function(e){ModelText('Helpdesk')})
document.getElementById('Switch').addEventListener('click',function(e){ModelText('Switch')})
document.getElementById('Wifi').addEventListener('click',function(e){ModelText('Wifi')})
document.getElementById('FIDO').addEventListener('click',function(e){ModelText('FIDO')})


//clear man screen
document.addEventListener('keydown',function(e){
    if (e.key === 'q' && currentpage === 'man'){
        clearPage()
    }
    
});

//reload the website
function Reload(){
    if(currentpage === 'home') {
        anima('reboot', '.cmd');
        setTimeout(function(){location.reload()},1000)
    }else {
        var id = 'cmd-txt-2'
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        anima('reboot', '.cmd2');
        setTimeout(function(){location.reload()},1000)
    }
    
}

//Model Text Change
function ModelText(project){
    var title = 'findModalLabel'
    var body = 'findBody'
    let modelTxt = project
    // console.log(project)
    if(modelTxt === 'Intune'){
        document.getElementById(title).innerHTML = 'Intune Rollout';
        document.getElementById(body).innerHTML = 'Enrolling 130 PC, 30 laptops and 27 Moible phone endpoints into Microsoft Intunes endpoint manager. Alongside setting up update rings, Antivirus, Firewall and Attack Surface Reduction rules.'
    }else if (modelTxt === 'TeamsBot') {
        document.getElementById(title).innerHTML = 'Teams Helpdesk Bot';
        document.getElementById(body).innerHTML = 'Created a Teams Helpdesk bot using Power Virtual Agents to help support the users quicker and reduce my simple tickets so I can focus on the more complex issues. This included automatic emails and updates using power automate and links to Sharepoint.'
    }else if (modelTxt === 'NewStarter'){
        document.getElementById(title).innerHTML = 'New Starter Automation';
        document.getElementById(body).innerHTML = 'Using Power Automate to automate the new starter process for Kings Court Trust and Title Research in one flow. This cut the setup time for new starters from 2 hours to about 15 minutes depending on the specific user and removed a large portion of human error.'
    }else if (modelTxt === 'Sharepoint'){
        document.getElementById(title).innerHTML = 'Sharepoint Knowledgebase Creation';
        document.getElementById(body).innerHTML = 'I migrated the old Confluence knowledgebase that was being hosted on an Azure server into Microsoft SharePoint. As part of this I also added features for user engagement (Countdowns, twitter feeds and the like), a site for IT support creating a more centralised location for IT help and collaboration tools to help internal teams work together more efficiently'
    }else if (modelTxt === 'Helpdesk') {
        document.getElementById(title).innerHTML = 'Internal Helpdesk Ticket System';
        document.getElementById(body).innerHTML = 'I made a internal Helpdesk Ticket System to help the IT team organise jobs and ensure all issues were logged and able to reference back to if needed. This utilised Power Automate and Microsoft Planner as they both came with the companies 365 licence. This resulted in a huge improvement in efficiency and user satisfaction with the department.'
    }
    else if (modelTxt === 'Switch') {
        document.getElementById(title).innerHTML = 'Network Switch Replacement';
        document.getElementById(body).innerHTML = 'Installed and configured 5 POE network switched to replace the older ones. This required the setup of 4 VLANs including Telephony, WIFI and a private VLAN for set users.'
    }
    else if (modelTxt === 'Wifi') {
        document.getElementById(title).innerHTML = 'Wifi Network';
        document.getElementById(body).innerHTML = 'Replaces the old 1 AP WIFI network with a new 3 AP smart mesh network saving the company money on licence costs while increasing the strength and reliablity of the Office WIFI. Also setup a segragated guest network for visitors to the office.'
    }
    else if (modelTxt === 'FIDO') {
        document.getElementById(title).innerHTML = 'FIDO2 Security Keys';
        document.getElementById(body).innerHTML = 'I created my own FIDO2 security keys using a Raspberry Pi Pico. Then set security keys up for the IT team to use for 2FA on the Azure portal and other services. I love the keys so much I made one for my personal accounts as well.'    
    }
}

// current active page
let currentpage = 'home';
let modelTxt = ''

// page triggers
function finger(){
    if (currentpage == 'home'){
        fingerPage();
    } else {
        clearPage();
        setTimeout(function(){
            fingerPage();
        },999);
    }; 
}

function man(){
    if (currentpage == 'home'){
        manPage()
        // console.log(currentpage)        
    } else {
        clearPage()
        setTimeout(function(){
            manPage()
        },999)
    }; 
}

function find(){
    if (currentpage == 'home'){
        findPage()
        return currentpage = 'find';
    } else {
        clearPage()
        setTimeout(function(){
            findPage()
        },999)
    }; 
}

function ls(){
    if (currentpage == 'home'){
        lsPage()
    } else {
        clearPage()
        setTimeout(function(){
            lsPage()
        },999)
    }; 
}

function goa(){
    if (currentpage == 'home'){
        goaPage()
        return currentpage = 'goa';
    } else {
        clearPage()
        setTimeout(function(){
            goaPage()
        },999)
    };
}

function cat(){
    if (currentpage == 'home'){
        catPage()
        return currentpage = 'cat';
    } else {
        clearPage()
        setTimeout(function(){
            catPage()
        },999)
    }; 
}

function help(){
    if (currentpage == 'home'){
        helpPage()
        return currentpage = 'help';
    } else {
        clearPage()
        setTimeout(function(){
            helpPage()
        },999)
    }; 
}


// Typing Animation
function anima(input, location){

        const text  = document.querySelector(location);
        text.innerText = "";
        const str = input;
        const chars = str.split("");
        const interval = setInterval(()=>{
        if ( !chars.length ){ 
        return clearInterval(interval);
        }
        text.textContent += chars.shift();
  }, 100 );;
}

function homepage_Set() {
    return currentpage = 'home'
}

//Plays animation when page loads
function boot(){
    var id = 'cmd-txt';
        const input = 'Welcome, I am Dan. Please enjoy my site!';
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        anima(input, '.cmd');
        document.getElementById('cursor1').style.position = 'absolute';
        document.getElementById('cursor1').style.zIndex = -2;
        setTimeout(function(){
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
        },5000)
        setTimeout(function(){
            document.getElementById('cmd-txt-2').style.position = 'inherit';
            document.getElementById('cmd-txt-2').style.zIndex = 0;
            const input = 'clear';
            anima(input, '.cmd2');
        },7000)
        setTimeout(function(){
            document.getElementById('termial-line-2').style.zIndex = -2;
            document.getElementById('cmd-txt').innerHTML = '';
            document.getElementById('row1').style.visibility = 'inherit';
            document.getElementById('row2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'inherit';
            document.getElementById('cursor1').style.zIndex = 0;
            document.getElementById('cmd-txt-2').innerHTML = '';
            document.getElementById('man-info').style.visibility = 'hidden';
            document.getElementById('ls-table').style.visibility = 'hidden';
            document.getElementById('ls-info').style.visibility = 'hidden';
            document.getElementById('cat-info').style.visibility = 'hidden';
            document.getElementById('reverse').style.visibility = 'hidden';
            document.getElementById('help-table').style.visibility = 'hidden';
        },8000)
        setTimeout(function(){
            document.getElementById('cmd-txt').innerHTML = '';
            document.getElementById('cursor1').style.position = 'inherit';
            document.getElementById('cursor1').style.zIndex = 0;
        },9000)
}

// Clear current page
function clearPage() {
    //console.log(currentpage)
    var id = 'cmd-txt';
        const input = 'clear';
        var id = 'cmd-txt-2'
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        anima(input, '.cmd2');
        setTimeout(function(){
            document.getElementById('termial-line-2').style.zIndex = -2;
            var clearpage = currentpage + '-info';
            //console.log(clearpage)
            if (clearpage == 'home-info') {
                document.getElementById('cmd-txt-2').innerHTML = '';
                console.log(clearpage + 'Ifs')
            }else{
            //console.log(clearpage + 'else')
            document.getElementById(clearpage).style.zIndex = -2;
            document.getElementById(clearpage).style.position = 'absolute';
            document.getElementById(clearpage).style.visibility = 'hiddden';
            document.getElementById('cmd-txt').innerHTML = '';
            document.getElementById('row1').style.visibility = 'inherit';
            document.getElementById('row2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'inherit';
            document.getElementById('cursor1').style.zIndex = 0;
            document.getElementById('cmd-txt-2').innerHTML = '';
            document.getElementById('man-info').style.visibility = 'hidden';
            document.getElementById('ls-table').style.visibility = 'hidden';
            document.getElementById('ls-info').style.visibility = 'hidden';
            document.getElementById('cat-info').style.visibility = 'hidden';
            document.getElementById('reverse').style.visibility = 'hidden';
            document.getElementById('help-table').style.visibility = 'hidden';
            document.getElementById('goa-info').style.position = 'absolute';
            document.getElementById('goa-info').style.visibility = 'hidden';
            document.getElementById('cmd-txt-2').innerHTML = '';
            //console.log('ooh look at you clearing the screen, must think your so special')
            return currentpage = "home"
            }
            
        },1000);
}

//Not in use
function clear() {
    document.getElementById('wel').style.visibility = 'hidden' ;
    document.getElementById('sel').style.visibility = 'hidden';
    document.getElementById('cmd-txt-2').innerHTML = '';
}

// page generation

function fingerPage() {
    var id = 'cmd-txt';
        document.getElementById('cmd-txt-2').innerHTML = '';
        clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = 'finger -l d.ward';
        anima(input, '.cmd');
        setTimeout(function(){
            document.getElementById('finger-info').style.position = 'inherit';
            document.getElementById('finger-info').style.zIndex = 3;
            document.getElementById('finger-info').style.visibility = 'inherit'
            document.getElementById('man-info').visibility = 'hidden';
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'absolute';
            document.getElementById('cursor1').style.zIndex = -2;
            //console.log('I also chuckle when I see the finger command')
            return currentpage = 'finger'
        },2000);
        
}

function manPage() {
    var id = 'cmd-txt';
        document.getElementById('cmd-txt-2').innerHTML = '';
        clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = 'man d.ward/Skills';
        anima(input, '.cmd');
        setTimeout(function(){
            document.getElementById('row1').style.visibility = 'hidden';
            document.getElementById('row2').style.visibility = 'hidden';
            document.getElementById('man-info').style.position = 'inherit';
            document.getElementById('man-info').style.zIndex = 3;
            document.getElementById('man-info').style.visibility = 'inherit';
            //console.log('🎵"I will make a man out of you"🎵. Yes i know its means manual but who doesnt like Mulan')
            return currentpage = 'man'
        },2000);
        
}

function findPage(){
    var id = 'cmd-txt';
    document.getElementById('cmd-txt-2').innerHTML = '';
    clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = "find Projects - name '*.txt'";
        anima(input, '.cmd');
        setTimeout(function(){
            document.getElementById('find-info').style.position = 'inherit';
            document.getElementById('find-info').style.zIndex = 3;
            document.getElementById('find-info').style.visibility = 'inherit'
            document.getElementById('man-info').visibility = 'hidden';
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'absolute';
            document.getElementById('cursor1').style.zIndex = -2;
            //console.log('By the rules of Finders Keepers, i now have also done all these projects, hire me instead')
            return currentpage = 'find'
        },3000);
}

function lsPage(){
    var id = 'cmd-txt';
    document.getElementById('cmd-txt-2').innerHTML = '';
    clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = "ls -l Qualifications";
        anima("ls -lh Qualifications", '.cmd');
        setTimeout(function(){
            document.getElementById('ls-info').style.position = 'inherit';
            document.getElementById('ls-info').style.zIndex = 3;
            document.getElementById('ls-info').style.visibility = 'inherit'
            document.getElementById('ls-table').style.visibility = 'inherit';
            document.getElementById('man-info').visibility = 'hidden';
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'absolute';
            document.getElementById('cursor1').style.zIndex = -2;
            //console.log('ls, really Dan? you couldnt find a more creative command to use.')
            return currentpage = 'ls'
        },2500);
}

function catPage(){
    var id = 'cmd-txt';
    document.getElementById('cmd-txt-2').innerHTML = '';
    clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = "cat d.ward/Socials.txt";
        anima(input, '.cmd');
        setTimeout(function(){
            document.getElementById('cat-info').style.position = 'inherit';
            document.getElementById('cat-info').style.zIndex = 3;
            document.getElementById('cat-info').style.visibility = 'inherit'
            document.getElementById('man-info').visibility = 'hidden';
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'absolute';
            document.getElementById('cursor1').style.zIndex = -2;
            //console.log('Meow')
            return currentpage = 'cat'
        },2500);
}

function helpPage(){
    var id = 'cmd-txt';
    document.getElementById('cmd-txt-2').innerHTML = '';
    clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = "homepage --help ";
        anima(input, '.cmd');
        setTimeout(function(){
            document.getElementById('help-info').style.position = 'inherit';
            document.getElementById('help-info').style.zIndex = 3;
            document.getElementById('help-info').style.visibility = 'inherit'
            document.getElementById('help-table').style.visibility = 'inherit'
            document.getElementById('man-info').visibility = 'hidden';
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'absolute';
            document.getElementById('cursor1').style.zIndex = -2;
            //console.log('Really your that intrested in Linux commands that you are looking at Dans half arsed attempts to exsplain them')
            return currentpage = 'help'
        },2500);
}

function goaPage(){
    var id = 'cmd-txt';
    document.getElementById('cmd-txt-2').innerHTML = '';
    clear();
    document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = "grep Goal Goals.txt";
        anima(input, '.cmd');
        setTimeout(function(){
            document.getElementById('goa-info').style.position = 'inherit';
            document.getElementById('goa-info').style.zIndex = 3;
            document.getElementById('goa-info').style.visibility = 'inherit'
            document.getElementById('man-info').visibility = 'hidden';
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'absolute';
            document.getElementById('cursor1').style.zIndex = -2;
            return currentpage = 'goa'
        },2200);
}