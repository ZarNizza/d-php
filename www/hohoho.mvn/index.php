<html>
	<head>
		<title>Untitled Document</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
		<script language="JavaScript">

function Initialize()
{
    var pageName = QueryString("Page");
    if (pageName.length > 0)
    {
        parent.mainFrame.location.href = pageName + ".html";
    }
    else
    {
        parent.mainFrame.location.href = "Реестр_плановых_проверок.html";
    }
}

function HandleMainFrameChanged()
{
	if (parent.mainFrame.PageName != null)
	{
		parent.topFrame.highlight(parent.mainFrame.PageId);
		if (parent.notesFrame && parent.notesFrame.ShowNotes) {
			parent.notesFrame.ShowNotes(parent.mainFrame.PageId);
		}
		document.title = parent.mainFrame.PageName;
	}
}

function CloseSitemap()
{
	self.location.href = parent.mainFrame.location.href
}

function QueryString(query)
{
    var qstring = self.location.href.split("?");
    if(qstring.length < 2) return ""

    var prms=qstring[1].split("&");
    var frmelements=new Array();
    var currprmeter, querystr="";

    for(i=0;i<prms.length;i++){
        currprmeter=prms[i].split("=");
        frmelements[i]=new Array();
        frmelements[i][0]=currprmeter[0];
        frmelements[i][1]=currprmeter[1];
    }

    for(j=0;j<frmelements.length;j++)
    {
            if(frmelements[j][0]==query)
	    {
                querystr=frmelements[j][1];
                break;
            }
    }
    return querystr;
}
</script>
	</head>
	<frameset cols="200,*" frameborder="YES" framespacing="0" onLoad="Initialize()">
		<frame name="topFrame" src="_SiteTree.html">
		<frameset rows="*,70" frameborder="YES" framespacing="0">
			<frame name="mainFrame" src="">
			<frame name="notesFrame" src="_Notes.html">
		</frameset>
	</frameset>
</html>
