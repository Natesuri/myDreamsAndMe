'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('[data-scroll-to]').on('click', function () {
    const scrollTarget = $(event.target).data('scroll-to')

    const scrollTargetTop = $(`[data-scroll-target=${scrollTarget}`).offset().top

    window.scrollTo(0, scrollTargetTop - 50)
    // console.log('yo, my data-scroll-to is', event)
  })

  $('[data-id=read]').on('click', function () {
    $('#sample-modal').modal('show')
  })

  $('[data-id=event-05-11-19]').on('click', function () {
    $('#event-modal-05-11-19').modal('show')
  })

  $('[data-id=bn]').on('click', function () {
    $('#bn-modal').modal('show')
  })

  // $('.past-events-carousel').slick({
  //   setting-name: setting-value
  // });
})
