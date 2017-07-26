/*
 * this file is part of:
 * projekktor zwei
 * http://www.projekktor.com
 *
 * Copyright 2015 - Radosław Włodkowski, www.wlodkowski.net, radoslaw@wlodkowski.net
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
*/
(function(window, document, $, $p){

$p.newModel({
    modelId: 'OSMFVIDEOHLS',
    iLove: [
        {ext:'m3u8', type:'application/x-mpegurl', platform:['flash'], streamType: ['http', 'httpVideo', 'httpVideoLive']},
        {ext:'m3u8', type:'application/vnd.apple.mpegurl', platform:['flash'], streamType: ['http', 'httpVideo', 'httpVideoLive']}
    ]
}, 'OSMFVIDEO');

$p.newModel({
    modelId: 'OSMFAUDIOHLS',
    iLove: [
        {ext:'m3u8', type:'application/vnd.apple.mpegurl', platform: ['flash'], streamType: ['http', 'httpAudio', 'httpAudioLive']},
        {ext:'m3u', type:'application/vnd.apple.mpegurl', platform: ['flash'], streamType: ['http', 'httpAudio', 'httpAudioLive']},
        {ext:'m3u8', type:'application/x-mpegurl', platform: ['flash'], streamType: ['http', 'httpAudio', 'httpAudioLive']},
        {ext:'m3u', type:'application/x-mpegurl', platform: ['flash'], streamType: ['http', 'httpAudio', 'httpAudioLive']},
        {ext:'m3u8', type:'audio/mpegurl', platform: ['flash'], streamType: ['http', 'httpAudio', 'httpAudioLive']},
        {ext:'m3u', type:'audio/mpegurl', platform: ['flash'], streamType: ['http', 'httpAudio', 'httpAudioLive']},
        {ext:'m3u8', type:'audio/x-mpegurl', platform: ['flash'], streamType: ['http', 'httpAudio', 'httpAudioLive']},
        {ext:'m3u', type:'audio/x-mpegurl', platform: ['flash'], streamType: ['http', 'httpAudio', 'httpAudioLive']}
    ]
}, 'OSMFAUDIO');

}(window, document, jQuery, projekktor));