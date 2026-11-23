(function () {
  function $(s) { return document.querySelector(s); }
  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // links that come from SITE (hidden if you haven't filled them in)
  document.querySelectorAll("[data-site]").forEach(function (a) {
    var u = SITE[a.dataset.site];
    if (!u) { a.hidden = true; return; }
    a.href = u; a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll("[data-mail]").forEach(function (a) {
    a.href = "mailto:" + SITE.email;
    if (a.hasAttribute("data-mail-text")) a.textContent = SITE.email;
  });
  document.querySelectorAll("[data-year]").forEach(function (n) { n.textContent = new Date().getFullYear(); });

  var contactForm = $("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var formData = new FormData(contactForm);
      var name = formData.get("name");
      var email = formData.get("email");
      var subject = formData.get("subject");
      var message = formData.get("message");
      var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
      window.location.href = "mailto:" + SITE.email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  // loom videos
  var vs = $("#videos");
  if (vs) {
    if (!VIDEOS.length) { vs.hidden = true; }
    else {
      vs.hidden = false;
      $("#videos-list").innerHTML = VIDEOS.map(function (v) {
        var src = v.url.replace("loom.com/share/", "loom.com/embed/");
        return '<div><iframe class="video" src="' + esc(src) + '" title="' + esc(v.title) +
          '" loading="lazy" allowfullscreen></iframe><p class="video-title">' + esc(v.title) + "</p></div>";
      }).join("");
    }
  }

  // writing
  var ps = $("#posts");
  if (ps) {
    if (!POSTS.length) { ps.hidden = true; }
    else {
      ps.hidden = false;
      $("#posts-list").innerHTML = POSTS.map(function (p) {
        return "<li>" + (p.date ? '<div class="date">' + esc(p.date) + "</div>" : "") +
          '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>" +
          (p.summary ? "<p>" + esc(p.summary) + "</p>" : "") + "</li>";
      }).join("");
    }
  }

  // projects
  var pr = $("#projects");
  if (pr) {
    if (!PROJECTS.length) { pr.hidden = true; }
    else {
      pr.innerHTML = PROJECTS.map(function (p) {
        var links = "";
        if (p.github) links += '<a href="' + esc(p.github) + '" target="_blank" rel="noopener">Code</a>';
        if (p.live) links += '<a class="btn solid" href="' + esc(p.live) + '" target="_blank" rel="noopener">Visit live project</a>';
        return '<details class="card project-card"><summary><h2>' + esc(p.title) + "</h2>" +
          (p.status ? '<span class="status project-status">' + esc(p.status) + "</span>" : "") +
          '</summary><div class="project-details"><p>' + esc(p.summary) + "</p>" +
          '<div class="tags">' + p.stack.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
          (p.architecture ? '<figure class="architecture"><img src="' + esc(p.architecture) +
            '" alt="Find It First AWS serverless architecture diagram" loading="lazy"><figcaption>Find It First · AWS serverless architecture</figcaption></figure>' : "") +
          (links ? '<div class="links">' + links + "</div>" : "") + "</div></details>";
      }).join("");
    }
  }
})();
