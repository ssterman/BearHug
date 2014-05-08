
        <script src="index.js" type="text/javascript"></script>

   var webrtc = new SimpleWebRTC({
			  // the id/element dom element that will hold "our" video
			  localVideoEl: 'localVideo',
			  // the id/element dom element that will hold remote videos
			  remoteVideosEl: 'remoteContainer',
			  // immediately ask for camera access
			  autoRequestMedia: true
			});

			// we have to wait until it's ready
			webrtc.on('readyToCall', function () {
			  // you can name it anything
			  webrtc.joinRoom('cs247');
			});

            //firebase setup            
            fb_instance = new Firebase("https://avatar-gestures.firebaseio.com/");

            function send_trigger(msg) {
                fb_instance.push({m: msg});
            }
            
            fb_instance.on('child_added', function(snapshot){
                var msg = snapshot.val().m;
                console.log(msg);
                fb_instance.remove();
                if (msg == "hug") {
                    animateHug();
                } else if (msg == "kiss") {
                    animateKiss();
                } else if (msg == "pat") {
                    animatePat();
                }
            });

            function animateHug() {
                var container = document.getElementById("animationContainer");
                var me = document.getElementById("animation_me");
                var you = document.getElementById("animation_you");
                move(me, you);
            }

        	function trigger_hug() {
                send_trigger("hug");
        	}

        	function trigger_pat() {
                send_trigger("pat");
        	}

        	function trigger_kiss() {
                send_trigger("kiss");
        	}

        	function animateWalk() {
        		console.log("walking");
                var container = document.getElementById("animationContainer");
                var me = document.getElementById("animation_me");
                var you = document.getElementById("animation_you");
                move(me, you);
        	}

            //reference: http://www.schillmania.com/content/projects/javascript-animation-1/
            function move(me, you) {
                me.style.left = parseInt(me.style.left)+1+'px';
                if (me.left != you.left) {
                    setTimeout(move(me, you),20); // call doMove in 20msec
                } else {
                    me.src ="hug.gif";
                }
            }