<script>
  import opensshImage from "./assets/openssh.svg";
  import grabakeyLogo from "./assets/logo.svg";
  let email = "";
  let page = "home";
  let alert = { class: "alert hide", text: "", visible: false };
  let disabled = false;
  //load event does not work with vite hot reloading
  if (location.hash.startsWith("#")) {
    page = location.hash.substring(1);
  }
  const on_hash = async () => {
    page = location.hash.substring(1);
  };
  const on_submit = async (e) => {
    e.preventDefault(0);
    // console.log(`${email}`);
    disabled = true;
    alert = { class: "alert hide", text: "", visible: false };
    const res = await fetch("/api/pubkey", {
      method: "POST",
      body: email,
    });
    // console.log(`${res.status}`);
    disabled = false;
    switch (res.status) {
      case 200:
        alert = {
          class: "alert alert-success mt-3",
          text: "A confirmation email has been sent.",
          visible: true,
        };
        break;
      default:
        alert = {
          class: "alert alert-danger mt-3",
          text: "Failure calling the Grabakey API.",
          visible: true,
        };
        break;
    }
  };
</script>

<svelte:window on:hashchange={on_hash} />

<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container">
    <a
      class="navbar-brand"
      href="https://grabakey.org"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={grabakeyLogo}
        alt="Grabakey Logo"
        height="50"
        class="d-inline-block align-text-top"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link"
            class:active={page == "home"}
            aria-current="page"
            href="#home">Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={page == "faq"} href="#faq">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={page == "privacy"} href="#privacy"
            >Privacy</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={page == "terms"} href="#terms"
            >Terms</a
          >
        </li>
      </ul>
      <a
        class="nav-link"
        href="https://github.com/grabakey"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bi-github" />
      </a>
    </div>
  </div>
</nav>

<main class="container">
  {#if page == "home"}
    <form
      on:submit={on_submit}
      class="d-flex page w-100 align-items-center justify-content-center"
    >
      <input
        required
        pattern="^\S+@\S+(\.\S+)+$"
        class="form-control me-2"
        style="max-width: 32em;"
        bind:value={email}
        placeholder="name@domain.com"
      />
      <button
        {disabled}
        type="submit"
        class="btn btn-success ms-2"
        title="Click to register or recover access">Register or Recover</button
      >
    </form>
    {#if alert.visible}
      <div class={alert.class} role="alert">
        {alert.text}
      </div>
    {/if}
  {/if}
  {#if page == "faq"}
    <br />
    <br />
    <h2>Frequently Asked Questions</h2>
    <br />
    <h3>What is Grabakey?</h3>
    <p>
      Grabakey is an open public key repository where you can associate a public
      key with your email address so you can use your public key from anywhere
      and everywhere. Grabakey is the conceptual child of the <a
        target="_blank"
        rel="noreferrer"
        href="https://letsencrypt.org">letsencrypt</a
      >
      and
      <a target="_blank" rel="noreferrer" href="https://gravatar.com"
        >gravatar</a
      > projects. Grabakey's goal is to bring convenience to the management of your
      public keys to foster the use of security best practices around the world.
    </p>
    <h3>What is its main use case?</h3>
    <p>
      The Grabakey <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/grabakey/gak_openssh">OpenSSH plugin</a
      > allows you to passwordlessly login into your Linux server farm or Linux device
      fleet by configuring the sshd service to fetch the authorized public keys from
      Grabakey. Grabakey is the cloud version of the ~/.ssh/authorized_keys file.
      When a private key is lost or compromised, just generate a new pair and update
      your Grabakey public key and all your servers will deny access to the previous
      key and will grant access to the new one immediately.
    </p>
    <img src={opensshImage} alt="Grabakey OpenSSH" width="80%" />
    <h3>How does it work?</h3>
    <p>
      When you register with Grabakey a confirmation email is sent to you with
      instructions on how to perform the next steps which include: (a) Updating
      your public key (b) Retrieving your public key (c) Installing the openssh
      plugin (d) Deleting your Grabakey registration. On each update a new email
      with the next steps instructions will be emitted keeping you on top of the
      process at any moment.
    </p>
    <h3>Is it safe?</h3>
    <p>
      Grabakey uses security best practices and its API is only accesible over
      secure HTTP. Grabakey enforces email based authentication for each of its
      API operations. Grabakey is a repository for public keys only. Grabakey
      does not store, require, or request any of your private keys.
    </p>
    <h3>How do we get help?</h3>
    <p>
      We are happy to learn how to better serve you. Do not hesitate to share
      your concerns and ideas with us. Drop us a line at hello@grabakey.org.
    </p>
    <h3>Is it free?</h3>
    <p>
      Grabakey is committed to be a free service. If you find the service useful
      consider <a
        target="_blank"
        rel="noreferrer"
        href="https://patreon.com/Grabakey"
        >making a small donation or becoming a patron</a
      >.
    </p>
    <br />
    <br />
  {/if}
  {#if page == "privacy"}
    <br />
    <br />
    <h2>Privacy Policy</h2>
    <br />
    <ul>
      <li>Grabakey does not and will never use or store cookies.</li>
      <li>
        Grabakey does not and will never share your information with anyone.
      </li>
      <li>
        Grabakey does not and will never require or store any other information
        than the information provided by You to the Grabakey API.
      </li>
    </ul>
    <br />
    <br />
  {/if}
  {#if page == "terms"}
    <br />
    <br />
    <h2>Terms of Use</h2>
    <br />
    <p>
      Please read these Terms carefully before using this website. By using this
      website (the "Website"), the user ("You") has accepted these Terms of Use.
      If You do not accept these Terms of Use, do not use the Website. By using
      this Website, you represent that you are of legal age to form a binding
      contract with Grabakey.
    </p>
    <h3>You agree to the following rules:</h3>
    <p>
      You may not post or link to content that is threatening, abusive,
      defamatory, libelous, derogatory, violent, harassing, bigoted, hateful,
      profane, obscene, lewd, lascivious, pornographic or otherwise
      objectionable, that gives rise to civil or criminal liability, or
      otherwise violates any applicable law. You may not intentionally make
      false or misleading statements. You may not post material that infringes
      any copyright, trademark, patent, trade secret, right of privacy or right
      of publicity. You may not disclose confidential information. You may not
      disclose information that you do not lawfully possess. You may not post,
      link to, upload or transmit software or other materials that contain
      viruses, worms, time bombs, trojan horses, or other harmful or disruptive
      components. You may not restrict or inhibit any other user from using or
      enjoying this Website, for example, by cracking, spoofing, defacing, or
      impairing functionality.
    </p>
    <p>
      You are solely responsible for the content You provide. Grabakey has the
      right, but not the duty, to pre-screen, refuse, edit, move or remove any
      content that violates these Terms of Use or that is unlawful.
    </p>
    <p>
      LIMITATION ON LIABILITY. THIS WEBSITE AND ALL CONTENT, MATERIALS,
      INFORMATION, SOFTWARE, PRODUCTS AND SERVICES ARE PROVIDED ON AN "AS IS"
      AND "AS AVAILABLE" BASIS. YOUR USE OF THIS WEBSITE IS AT YOUR OWN RISK.
      GRABAKEY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT
      LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
      PURPOSE, AND NONINFRINGEMENT. TO THE FULLEST EXTENT PERMITTED BY LAW, RED
      HAT IS NOT LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, SPECIAL,
      INCIDENTAL,CONSEQUENTIAL, OR EXEMPLARY DAMAGES (INCLUDING, WITHOUT
      LIMITATION, LOSS OF BUSINESS, REVENUE, PROFITS, GOODWILL, USE, DATA,
      ELECTRONICALLY TRANSMITTED ORDERS, OR OTHER ECONOMIC ADVANTAGE) ARISING
      OUT OF OR IN CONNECTION WITH THE WEBSITE, EVEN IF GRABAKEY HAS PREVIOUSLY
      BEEN ADVISED OF, OR REASONABLY COULD HAVE FORESEEN, THE POSSIBILITY OF
      SUCH DAMAGES, HOWEVER THEY ARISE, WHETHER IN BREACH OF CONTRACT OR IN TORT
      (INCLUDING NEGLIGENCE), INCLUDING WITHOUT LIMITATION DAMAGES DUE TO (a)
      THE USE OF OR THE INABILITY TO USE THE WEBSITE; (b) THE COST OF
      PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS,
      DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED
      OR TRANSACTIONS ENTERED INTO, THROUGH OR FROM THE WEBSITE; ( c) STATEMENTS
      OR CONDUCT OF ANY THIRD PARTY ON THE WEBSITE, INCLUDING WITHOUT LIMITATION
      UNAUTHORIZED ACCESS TO OR ALTERATION OF TRANSMISSIONS OR DATA, MALICIOUS
      OR CRIMINAL BEHAVIOR, OR FALSE OR FRAUDULENT TRANSACTIONS, OR (d) CONTENT
      OR INFORMATION YOU MAY DOWNLOAD, USE, MODIFY OR DISTRIBUTE. GRABAKEY MAKES
      NO WARRANTY THAT, (i) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE,
      OR ERROR-FREE, (ii) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE
      SERVICE WILL BE ACCURATE OR RELIABLE, (iii) THE QUALITY OF ANY PRODUCTS,
      SERVICES, CONTENT, INFORMATION, OR OTHER MATERIALS OBTAINED BY YOU THROUGH
      THE SERVICE WILL MEET YOUR EXPECTATIONS, (iv) ANY ERRORS IN THE SOFTWARE
      WILL BE CORRECTED, OR THAT THIS WEBSITE, ITS CONTENT, AND THE SERVER ON
      WHICH THE WEBSITE AND CONTENT ARE AVAILABLE ARE FREE OF VIRUSES OR OTHER
      HARMFUL COMPONENTS. ANY MATERIAL (INCLUDING CONTENT) DOWNLOADED OR
      OBTAINED THROUGH THE USE OF THIS WEBSITE IS DONE AT YOUR OWN RISK AND YOU
      WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS
      OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY MATERIAL. INFORMATION
      CREATED BY THIRD PARTIES THAT YOU MAY ACCESS ON THIS WEBSITE OR THROUGH
      LINKS IS NOT APPROVED, ADOPTED OR ENDORSED BY GRABAKEY AND REMAINS THE
      RESPONSIBILITY OF THE THIRD PARTY. TO THE EXTENT ANY JURISDICTION DOES NOT
      ALLOW THE EXCLUSION OR LIMITATION OF DIRECT, INCIDENTAL OR CONSEQUENTIAL
      DAMAGES, PORTIONS OF THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY.
    </p>
    <br />
    <br />
  {/if}
</main>

<style>
  .page {
    height: calc(100vh - 200px);
    height: -o-calc(100vh - 200px); /* opera */
    height: -webkit-calc(100vh - 200px); /* google, safari */
    height: -moz-calc(100vh - 200px); /* firefox */
  }
</style>
