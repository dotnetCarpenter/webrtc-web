'use strict'

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia

const contraints = {
  audio: false,
  video: true
}

const video = document.querySelector('video')

function successCallback (stream) {
  window.stream = stream

  try {
    video.srcObject = stream
  } catch (error) {
    console.error(error)
    if (window.URL) {
      video.src = window.URL.createObjectURL(stream)
    } else {
      video.src = stream
    }
  }

  // if (window.URL) {
  //   video.src = window.URL.createObjectURL(stream)
  // } else {
  //   video.src = stream
  // }
}

function errorCallback (error) {
  console.error('navigator.getUserMedia error: ', error)
}

navigator.getUserMedia(contraints, successCallback, errorCallback)

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', event => {
    const name = btn.classList.item(0)
    addFilter(name)
  }, false)
})

function addFilter (name) {
  video.classList.remove(video.classList.item(0))
  video.classList.add(name)
}
