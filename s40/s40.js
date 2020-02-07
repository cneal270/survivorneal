$(document).ready(function(){
    /* global $*/
    $("#rules").click(function(){
        $("#rulesDiv").slideToggle();
    });
    
    var christian = 0;
    var kristy = 0;
    var outcasts = 0;
    var mom = 0;
	
    var rob = 0;
    var ben = 0;
    var nick = 0;
    var danni = 0;
    var jeremy = 0;
    var sarah = 0;
	
	var yul = 0;
    var kim = 0;
    var tyson = 0;
    var michele = 0;
    var sophie = 0;
    var adam = 0;
	
	var parvati = 0;
    var wendell = 0;
    var natalie = 0;
    var ethan = 0;
    var amber = 0;
    var sandra = 0;
	
    var denise = 0;
    var tony = 0;
    
    $("#chart td.hoh").text("5");
    $("#chart td.nom").text("-1");
    $("#chart td.pov").text("3");
    $("#chart td.hn").text("-0.5");
    $("#chart td.hoh-pov").text("8");
    $("#chart td.nom-pov").text("2");
    $("#chart td.nom-vetoed").text("0");
    $("#chart td.nom-pov-vetoed").text("3");
    $("#chart td.hn-nom").text("-1.5");
    $("#chart td.hn-pov").text("2.5");
    $("#chart td.hn-nom-pov").text("1.5");
    $("#chart td.hn-nom-vetoed").text("-0.5");
    $("#chart td.hn-nom-pov-vetoed").text("2.5");
    $("#chart td.nom-evicted-pj").text("-4");
    $("#chart td.hn-nom-evicted-pj").text("-4.5");
    $("#chart td.nom-evicted-j").text("-3");
    $("#chart td.hn-nom-evicted-j").text("-3.5");
    $("#chart td.runner-up").text("15");
    $("#chart td.winner").text("30");
    $("#chart td.expelled").text("-5");
    $("#chart td.dot").text("4");
    $("#chart td.rk").text("4");
    $("#chart td.hoh-dot").text("9");
    $("#chart td.nom-rk").text("3");
    $("#chart td.rk-nom").text("3");
    $("#chart td.rk-nom-evicted-pj").text("0");
    $("#chart td.nom-rk-evicted-pj").text("0");
    $("#chart td.nom-dot-evicted-pj").text("0");
    $("#chart td.nom-dot-evicted-j").text("1");
    $("#chart td.hn-dot").text("3.5");
    $("#chart td.nom-dot").text("3");
    $("#chart td.pov-dot").text("7");
    $("#chart td.fav").text("10");
    $("#chart td.runner-up-fav").text("25");
    $("#chart td.co-hoh1").text("2.5");
    $("#chart td.co-hoh2").text("2.5");
    
    $("td[name~='rob']").each(function() {
        if ($(this).html() != "") {
            rob = rob + parseFloat($(this).html());
        }
    });
    $("td[name~='ben']").each(function() {
        if ($(this).html() != "") {
            ben = ben + parseFloat($(this).html());
        }
    });
    $("td[name~='nick']").each(function() {
        if ($(this).html() != "") {
            nick = nick + parseFloat($(this).html());
        }
    });
    $("td[name~='danni']").each(function() {
        if ($(this).html() != "") {
            danni = danni + parseFloat($(this).html());
        }
    });
    $("td[name~='jeremy']").each(function() {
        if ($(this).html() != "") {
            jeremy = jeremy + parseFloat($(this).html());
        }
    });
    $("td[name~='sarah']").each(function() {
        if ($(this).html() != "") {
            sarah = sarah + parseFloat($(this).html());
        }
    });
    $("td[name~='yul']").each(function() {
        if ($(this).html() != "") {
            yul = yul + parseFloat($(this).html());
        }
    });
    $("td[name~='kim']").each(function() {
        if ($(this).html() != "") {
            kim = kim + parseFloat($(this).html());
        }
    });
    $("td[name~='tyson']").each(function() {
        if ($(this).html() != "") {
            tyson = tyson + parseFloat($(this).html());
        }
    });
    $("td[name~='michele']").each(function() {
        if ($(this).html() != "") {
            michele = michele + parseFloat($(this).html());
        }
    });
    $("td[name~='sophie']").each(function() {
        if ($(this).html() != "") {
            sophie = sophie + parseFloat($(this).html());
        }
    });
    $("td[name~='adam']").each(function() {
        if ($(this).html() != "") {
            adam = adam + parseFloat($(this).html());
        }
    });
    $("td[name~='parvati']").each(function() {
        if ($(this).html() != "") {
            parvati = parvati + parseFloat($(this).html());
        }
    });
    $("td[name~='wendell']").each(function() {
        if ($(this).html() != "") {
            wendell = wendell + parseFloat($(this).html());
        }
    });
    $("td[name~='natalie']").each(function() {
        if ($(this).html() != "") {
            natalie = natalie + parseFloat($(this).html());
        }
    });
    $("td[name~='ethan']").each(function() {
        if ($(this).html() != "") {
            ethan = ethan + parseFloat($(this).html());
        }
    });
    $("td[name~='amber']").each(function() {
        if ($(this).html() != "") {
            amber = amber + parseFloat($(this).html());
        }
    });
    $("td[name~='sandra']").each(function() {
        if ($(this).html() != "") {
            sandra = sandra + parseFloat($(this).html());
        }
    });
    $("td[name~='denise']").each(function() {
        if ($(this).html() != "") {
            denise = denise + parseFloat($(this).html());
        }
    });
    $("td[name~='tony']").each(function() {
        if ($(this).html() != "") {
            tony = tony + parseFloat($(this).html());
        }
    });
    
    
    $("td[name~='rob_total']").text(rob);
    $("td[name~='ben_total']").text(ben);
    $("td[name~='nick_total']").text(nick);
    $("td[name~='danni_total']").text(danni);
    $("td[name~='jeremy_total']").text(jeremy);
    $("td[name~='sarah_total']").text(sarah);
    $("td[name~='yul_total']").text(yul);
    $("td[name~='kim_total']").text(kim);
    $("td[name~='tyson_total']").text(tyson);
    $("td[name~='michele_total']").text(michele);
    $("td[name~='sophie_total']").text(sophie);
    $("td[name~='adam_total']").text(adam);
    $("td[name~='parvati_total']").text(parvati);
    $("td[name~='wendell_total']").text(wendell);
    $("td[name~='natalie_total']").text(natalie);
    $("td[name~='ethan_total']").text(ethan);
    $("td[name~='amber_total']").text(amber);
    $("td[name~='sandra_total']").text(sandra);
    $("td[name~='denise_total']").text(denise);
    $("td[name~='tony_total']").text(tony);
    
    
    $("span.kristy").text(
        parseFloat($("td[name~='rob_total']").html()) +
        parseFloat($("td[name~='ben_total']").html()) +
        parseFloat($("td[name~='nick_total']").html()) +
        parseFloat($("td[name~='danni_total']").html()) +
        parseFloat($("td[name~='jeremy_total']").html()) +
        parseFloat($("td[name~='sarah_total']").html())
    );
    $("span.christian").text(
        parseFloat($("td[name~='yul_total']").html()) +
        parseFloat($("td[name~='kim_total']").html()) +
        parseFloat($("td[name~='tyson_total']").html()) +
        parseFloat($("td[name~='michele_total']").html()) +
        parseFloat($("td[name~='sophie_total']").html()) +
        parseFloat($("td[name~='adam_total']").html())
    );
    $("span.mom").text(
        parseFloat($("td[name~='parvati_total']").html()) +
        parseFloat($("td[name~='wendell_total']").html()) +
        parseFloat($("td[name~='natalie_total']").html()) +
        parseFloat($("td[name~='ethan_total']").html()) +
        parseFloat($("td[name~='amber_total']").html()) +
        parseFloat($("td[name~='sandra_total']").html())
    );
    $("span.outcasts").text(
		parseFloat($("td[name~='denise_total']").html()) +
        parseFloat($("td[name~='tony_total']").html())
	);
    
    /*var max = Math.max(christian, mom, kristy);
    alert(max);
    if (max == christian) {
        $("th.christian").addClass("first");
    }
    else if (max == mom) {
        $("th.mom").addClass("first");
    }
    else if (max == kristy) {
        $("th.kristy").addClass("first");
    }*/
	
    christian = $("span.christian").text();
	if (parseFloat(christian) > parseFloat(0)) {
        $("span.christian").addClass("good");
    }
    else {
        $("span.christian").addClass("bad");
    }
	
    mom = $("span.mom").text();
	if (parseFloat(mom) > parseFloat(0)) {
        $("span.mom").addClass("good");
    }
    else {
        $("span.mom").addClass("bad");
    }
	
    outcasts = $("span.outcasts").text();
	if (parseFloat(outcasts) > parseFloat(0)) {
        $("span.outcasts").addClass("good");
    }
    else {
        $("span.outcasts").addClass("bad");
    }
	
    kristy = $("span.kristy").text();
	if (parseFloat(kristy) > parseFloat(0)) {
        $("span.kristy").addClass("good");
    }
    else {
        $("span.kristy").addClass("bad");
    }
    
    
    /*
    if (Math.max(Number(christian), Number(mom), Number(kristy)) == Number(christian)) {
        $("th.christian").addClass("first");
        if (Number(mom) > Number(kristy)) {
            $("th.mom").addClass("second");
            $("th.kristy").addClass("third");
        } else if (Number(mom) < Number(kristy)) {
            $("th.kristy").addClass("second");
            $("th.mom").addClass("third");
        }
    }
    else if (Math.max(Number(christian), Number(mom), Number(kristy)) == Number(mom)) {
        $("th.mom").addClass("first");
        if (Number(christian) > Number(kristy)) {
            $("th.christian").addClass("second");
            $("th.kristy").addClass("third");
        } else if (Number(christian) < Number(kristy)) {
            $("th.kristy").addClass("second");
            $("th.christian").addClass("third");
        }
    }
    else if (Math.max(Number(christian), Number(mom), Number(kristy)) == Number(kristy)) {
        $("th.kristy").addClass("first");
        if (Number(mom) > Number(christian)) {
            $("th.mom").addClass("second");
            $("th.christian").addClass("third");
        } else if (Number(mom) < Number(christian)) {
            $("th.christian").addClass("second");
            $("th.mom").addClass("third");
        }
    }*/
    
});
