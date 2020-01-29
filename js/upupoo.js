var upupoo_imageLayerImg = document.getElementById('upupoo_imageLayerImg');
upupoo_imageLayerImg.src = upupooConfig.bgImg;
upupooTimeFuntimePlugInUnit(upupooConfig.timestyle.value || '')
try {
    parent.isDragDiv && $('#upupoo_exhibitionLayer_two').upupooTimeFundragDiv('', 'upupoo_bottomLayer');
} catch (e) {
    console.log(e)
}
$('#upupoo_exhibitionLayer_two').css({
    'left': upupooConfig.upupoo_exhibitionLayer_twoStyle.left + '%',
    'top': upupooConfig.upupoo_exhibitionLayer_twoStyle.top + '%'
})
if (upupooConfig.establishBgMusic.musicIsShow != 0) {
    $('#upupooMusicOuterLayerBox').show()
}
if (upupooConfig.establishBgMusic.isEdited == 'true' &&
    upupooConfig.establishBgMusic.musicType == 1
) {
    try {
        if (parent.parent.$('#microPaper').css('display') == 'block' || parent.parent.$('#microPaper').css(
            'display') == undefined) {
            var audios = "<audio id='upupooAudio' src=" + encodeURI(upupooConfig.establishBgMusic.loadmusicSrc) +
                " autoplay loop></audio>";
            $('#upupooMusicPlayDisplayBox').empty().html(audios)
            $('.upupooMusicLeftInfoBox_musicName').text(upupooConfig.establishBgMusic.musicName)
            $('.upupooMusicLeftInfoBox_singerName').text(upupooConfig.establishBgMusic.singerName)
            $('#upupooMusicLeftInfoBox').removeClass('hovers hovers2').addClass('hovers')
        }
    } catch (e) {
        var audios = "<audio id='upupooAudio' src=" + encodeURI(upupooConfig.establishBgMusic.loadmusicSrc) +
            " autoplay loop></audio>";
        $('#upupooMusicPlayDisplayBox').empty().html(audios)
        $('.upupooMusicLeftInfoBox_musicName').text(upupooConfig.establishBgMusic.musicName)
        $('.upupooMusicLeftInfoBox_singerName').text(upupooConfig.establishBgMusic.singerName)
        $('#upupooMusicLeftInfoBox').removeClass('hovers hovers2').addClass('hovers')
        console.log(e)
    }
} else if (upupooConfig.establishBgMusic.musicType == 2) {
    try {
        if (parent.parent.$('#microPaper').css('display') == 'block' || parent.parent.$('#microPaper').css(
            'display') == undefined) {
            var s = upupooConfig.establishBgMusic.musicSrc,
                b = s.indexOf('src="') + 5,
                c = s.lastIndexOf('"></iframe>'),
                d = s.slice(b, c),
                e = 'http:' + d,
                f = s.replace(d, e);
            $('#upupooMusicPlayDisplayBox').empty().html(f).removeClass('hovers hovers2').addClass('hovers2')
            iframeSrc = $('iframe')[0].src
        }
    } catch (e) {
        var s = upupooConfig.establishBgMusic.musicSrc,
            b = s.indexOf('src="') + 5,
            c = s.lastIndexOf('"></iframe>'),
            d = s.slice(b, c),
            e = 'http:' + d,
            f = s.replace(d, e);
        $('#upupooMusicPlayDisplayBox').empty().html(f).removeClass('hovers hovers2').addClass('hovers2')
        iframeSrc = $('iframe')[0].src
        console.log(e)
    }
}
/*注册函数控制静音*/
window.registercb && window.registercb(microMusicCalljs);
var iframeSrc;

function microMusicCalljs(cmd) {
    switch (cmd) {
        case 42:
            if (upupooConfig.establishBgMusic.musicType == 1) {
                document.getElementById('upupooAudio').pause()
            } else if (upupooConfig.establishBgMusic.musicType == 2) {
                $('iframe')[0].src = ''
            }
            break;
        case 44:
            if (upupooConfig.establishBgMusic.musicType == 1) {
                document.getElementById('upupooAudio').play()
            } else if (upupooConfig.establishBgMusic.musicType == 2) {
                $('iframe')[0].src = iframeSrc
            }

            break;
        default:
            break;
    }
}
window.onload = function () {
    window.callNative && callNative(111, '')
}