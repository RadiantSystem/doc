"use strict";
/*jshint multistr:true */

$(document).ready(function() {
    var NavigationConfig, Languages, BasicHTML, $OriginalContent;

    Languages = {
        en: 'English (en)',
        de: 'Deutsch (de)',
        hu: 'Magyar (hu)',
        ja: '日本語 (ja)',
        pt_BR: 'português brasileiro (pt_BR)',
        ru: 'Русский (ru)',
        sw: 'Swahili (sw)',
        zh_CN: '简体中文 (zh_CN)'
    };

    NavigationConfig = [
        {
            Name: 'OTRS Admin Manual',
            Type: 'manual',
            Path: 'admin',
            Versions: [
                /*
                {
                    Version:  '7.0',
                    HTMLPath: '7.0',
                    Name:     'OTRS 7',
                    Languages: ['en']
                },
                */
                {
                    Version:  '6.0',
                    HTMLPath: 'stable',
                    Name:     'OTRS 6',
                    Languages: ['en', 'hu', 'zh_CN']
                },
                {
                    Version:  '5.0',
                    HTMLPath: '5.0',
                    Name:     'OTRS 5',
                    Languages: ['en', 'hu', 'zh_CN']
                },
                {
                    Version:  '4.0',
                    HTMLPath: '4.0',
                    Name:     'OTRS 4',
                    Languages: ['en', 'de', 'hu', 'ja', 'ru', 'sw']
                }
            ]
        },
        /*{
            Name: 'OTRS Business Solution™ Manual',
            Type: 'manual',
            Path: 'otrs-business-solution',
            Versions: [
                {
                    Version:     '6.0',
                    HTMLPath:    'stable',
                    Name:        'OTRS 6',
                    Languages:   ['en', 'hu'],
                    PDFPath:     'doc-otrsbusiness',
                    PDFFileName: 'otrs_business_solution_book.pdf'
                },
                {
                    Version:     '5.0',
                    HTMLPath:    '5.0',
                    Name:        'OTRS 5',
                    Languages:   ['en', 'pt_BR', 'hu'],
                    PDFPath:     'doc-otrsbusiness',
                    PDFFileName: 'otrs_business_solution_book.pdf'
                },
                {
                    Version:     '4.0',
                    HTMLPath:    '4.0',
                    Name:        'OTRS 4',
                    Languages:   ['en', 'hu'],
                    PDFPath:     'doc-otrsbusiness',
                    PDFFileName: 'otrs_business_solution_book.pdf'
                }
            ]
        },*/
        {
            Name: 'OTRS::ITSM Manual',
            Type: 'manual',
            Path: 'itsm',
            Versions: [
                {
                    Version:  '6.0',
                    HTMLPath: 'stable',
                    Name:     'OTRS::ITSM 6',
                    Languages: ['en', 'hu', 'ru', 'zh_CN']
                },
                {
                    Version:  '5.0',
                    HTMLPath: '5.0',
                    Name:     'OTRS::ITSM 5',
                    Languages: ['en', 'hu', 'ru', 'zh_CN']
                },
                {
                    Version:  '4.0',
                    HTMLPath: '4.0',
                    Name:     'OTRS::ITSM 4',
                    Languages: ['en', 'ru']
                }
            ]
        },
        {
            Name: 'OTRS Developer Manual',
            Type: 'manual',
            Path: 'developer',
            Versions: [
                {
                    Version:  '6.0',
                    HTMLPath: 'stable',
                    Name:     'OTRS 6',
                    Languages: ['en', 'hu']
                },
                {
                    Version:  '5.0',
                    HTMLPath: '5.0',
                    Name:     'OTRS 5',
                    Languages: ['en', 'hu']
                },
                {
                    Version:  '4.0',
                    HTMLPath: '4.0',
                    Name:     'OTRS 4',
                    Languages: ['en']
                }
            ]
        },
        {
            Name: 'OTRS API Reference',
            Type: 'api',
            Path: 'otrs',
            Versions: [
                {
                    Version:  '7.0',
                    HTMLPath: '7.0',
                    Types:    ['Perl', 'JavaScript', 'REST'],
                    Name:     'OTRS git (development)'
                },
                {
                    Version:  '6.0',
                    HTMLPath: 'stable',
                    Types:    ['Perl', 'JavaScript'],
                    Name:     'OTRS 6'
                },
                {
                    Version:  '5.0',
                    HTMLPath: '5.0',
                    Types:    ['Perl', 'JavaScript'],
                    Name:     'OTRS 5'
                },
                {
                    Version:  '4.0',
                    HTMLPath: '4.0',
                    Types:    ['Perl'],
                    Name:     'OTRS 4'
                }
            ]
        }
    ];

    function CreateNavigation () {

        var BaseURL = window.location.href;
        BaseURL = BaseURL+'doc/';
        BaseURL = BaseURL.replace(/\/doc\/.*/, '/doc/');

        var Navigation = '<ul id="marginalia">';
        $.each(NavigationConfig, function() {
            var Category = this;
            Navigation += '<li><a href="#">' + Category.Name + '</a><ul>';

            // Manual
            if (Category.Type === 'manual') {
                $.each(Category.Versions, function(){
                    var Version = this,
                        ID = 'manual_' + Category.Path + '_' + Version.Version;

                    ID = ID.replace(/\./g, '_');

                    function CreateHTMLPath(Version, Language) {
                        if (parseFloat(Version.Version) >= 7.0) {
                            return BaseURL + 'manual/' + Category.Path + '-beta/' + Version.HTMLPath + '/' + Language + '/index.html';
                        }
                        return BaseURL + 'manual/' + Category.Path + '/' + Version.HTMLPath + '/' + Language + '/html/index.html';
                    }

                    function CreatePDFPath(Version, Language, PDFPath, PDFFileName) {
                        return 'http://ftp.otrs.org/pub/otrs/doc/' + PDFPath + '/' + Version.Version + '/' + Language + '/pdf/' + PDFFileName;
                    }

                    Navigation += '<li id="' + ID + '"><a href="#">' + Version.Name + '</a><ul class="Hidden">';
                    $.each(Version.Languages, function(){
                        var Language = this;
                        var PDFPath     = 'doc-' + Category.Path;
                        var PDFFileName = 'otrs_' + Category.Path + '_book.pdf';

                        if (Version.PDFPath) {
                            PDFPath = Version.PDFPath;
                        }
                        if (Version.PDFFileName) {
                            PDFFileName = Version.PDFFileName;
                        }

                        if (Version.Languages.length > 1) {
                            Navigation += '<li><a href="#">' + Languages[Language] + '</a><ul class="Hidden">';
                        }
                        Navigation += '<li><a href="' + CreateHTMLPath(Version, Language) + '">HTML</a></li>';
                        Navigation += '<li><a href="' + CreatePDFPath(Version, Language, PDFPath, PDFFileName) + '">PDF</a></li>';
                        if (Version.Languages.length > 1) {
                            Navigation += '</ul></li>';
                        }
                    });
                    Navigation += '</ul></li>';
                });
            }
            // API
            else {
                $.each(Category.Versions, function(){
                    var Version = this,
                        ID = 'api_' + Category.Path + '_' + Version.Version;

                    ID = ID.replace(/\./g, '_');

                    Navigation += '<li id="' + ID + '"><a href="#">' + Version.Name + '</a><ul class="Hidden">';
                    $.each(Version.Types, function(){
                        var Type = this;
                        Navigation += '<li><a href="' + BaseURL + 'api/' + Category.Path + '/' + Version.HTMLPath + '/' + Type + '"';
                        if (Type === 'REST') {
                            Navigation += ' target="_blank"'
                        }
                        Navigation += '>' + Type + '</a></li>';
                    });
                    Navigation += '</ul></li>';
                });
            }

            Navigation += '</ul></li>';

        });
        Navigation += '</ul>';

        return Navigation;
    }

    BasicHTML = '\
<div id="Navigation">\
<!--\
    <ul>\
        <li class="" title="View Downloads">\
            <a href="/otrs/customer.pl?Action=CustomerDownloads" accesskey="y" title="Downloads (y)" >Downloads</a>\
        </li>\
    </ul>\
    <ul class="Individual">\
        <li class=""><a href="/otrs/customer.pl?Action=CustomerPreferences" title="Persönliche Einstellungen vornehmen">Einstellungen</a></li>\
        <li class="Last"><a id="LogoutButton" href="/otrs/customer.pl?Action=Logout">Marc Bonsels abmelden</a></li>\
    </ul>\
-->\
</div>\
<div class="doconline">\
    <div id="content">\
        <div id="marginalia_wrapper">' + CreateNavigation() + '</div>\
        <div id="doc" class="intro">\
            <div class="github-teaser github-teaser--important">\
                <p>\
                    <i class="fa fa-lightbulb-o"></i>\
                </p>\
            </div>\
        </div>\
<!-- Yandex.Metrika counter -->\
<script type="text/javascript" >\
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\
    ym(71085925, "init", {\
        clickmap:true,\
        trackLinks:true,\
        accurateTrackBounce:true,\
        webvisor:true\
   });\
</script>\
<noscript><div><img src="https://mc.yandex.ru/watch/71085925" style="position:absolute; left:-9999px;" alt="" /></div></noscript>\
<!-- /Yandex.Metrika counter -->\
    </div>\
</div>';

    $OriginalContent = $('body').children().detach();
    $('body').empty().append($.parseHTML(BasicHTML));
    $('div.doconline > div#content > div#doc').append($OriginalContent);

    $.each($('#marginalia > li > a'), function() {
        var text = $(this).text();
        $(this).after('<span class="SectionHeader">' + text + '</span>');
        $(this).remove();
    });

    $('#marginalia li li a').bind('click', function() {
        if ($(this).attr('href') === '#') {
            $(this).next('ul').toggleClass('Hidden');
            return false;
        }
    });

    // Add anchor link to scroll to the top of the page
    $('body').append('<a href="#top" id="totop">^ <span>Use Elevator</span></a>');
    $('#totop').on('click', function() {
        $('html,body').animate({scrollTop: '0px'}, 1000);
        return false;
    });
    $('#marginalia ul ul a').prepend('<i class="fa fa-chevron-right"></i>');

    // Docbook documentation
    if ($('div.navheader').length) {

        $('body').addClass('manual');

        // Make table of contents collapsable
        $('.toc').on('click', 'p b a', function() {
            $(this).parent().parent().next('dl').slideToggle('fast', function() {
                $(this).parent().toggleClass('closed');
            });
            return false;
        });

        $('div.toc p b').append('<a href="" class="toc-hide">Toggle</a>');

        // Article navigation, decorate if it has content, remove otherwise.
        if ( $('.section div.toc dl > dt').length ) {
            $('.section div.toc').prepend('<p><b>Article navigation <a href="">Toggle</a></b></p>');
        }
        else {
            $('.section div.toc').remove();

        }
        $('dl.toc').removeClass('toc');
    }
    // API documentation
    else if ($('div.box > h1').length) {
        // Fiddle with DOM
        $('body').addClass('api');
    }

    $('#marginalia a').each(function() {
        var LinkHref     = $(this).attr('href'),
            LocationHref = window.location.href,
            IsActive = false;

        LinkHref     = LinkHref.replace(/[\w\d-]+\.html[#\w\d-\.]*/g, '');
        LocationHref = LocationHref.replace(/[\w\d-]+\.html[#\w\d-\.]*/g, '');

        if (LocationHref.indexOf(LinkHref) > -1) {
            $(this).addClass('Active').parents('ul').removeClass('Hidden');
        }
    });
});
