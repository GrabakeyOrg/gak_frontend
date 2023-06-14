<script>
  import gakLogo from "/logo.svg";
  let email = "";
  const register = () => {};
</script>

<main>
  <div class="header">
    <a href="https://grabakey.org" target="_blank" rel="noreferrer">
      <img src={gakLogo} class="logo" alt="Grabakey Logo" />
    </a>
    <div>
      <input bind:value={email} placeholder="name@domain.com" />
      <button on:click={register}> Register or recover access </button>
    </div>
    <h1>Open public key repository</h1>
  </div>
  <div id="whatis">
    <h2>What is Grabakey?</h2>
    <p>
      Grabakey is an open public key repository where you can associate a public
      key with your email address so you can use your public key from anywhere
      and everywhere.
    </p>
  </div>
  <div id="safety">
    <h2>Is it safe?</h2>
    <p>
      Grabakey uses security best practices and its API is only accesible over
      secure HTTP. Grabakey enforces email based authentication for each of its
      API operations. Grabakey is a repository for public keys only. Grabakey
      does not store, require, or request any of your private keys.
    </p>
  </div>
  <div id="contact">
    <h2>We are here for you</h2>
    <p>
      We are happy to learn how to better serve you. Do not hesitate to share
      your concerns and ideas with us. Drop us a line at hello@grabakey.org.
    </p>
  </div>
  <div id="donate">
    <h2>Financial support</h2>
    <p>
      Grabakey is committed to be a free service. If you find the service useful
      consider <a
        target="_blank"
        rel="noreferrer"
        href="https://patreon.com/Grabakey"
        >making a small donation or becoming a patron</a
      >.
    </p>
  </div>
  <div id="privacy">
    <h2>Privacy Policy</h2>
    <p>
      Grabakey does not and will never use or store cookies. Grabakey does not
      and will never share your information with anyone. Grabakey does not and
      will never require or store any other information than the information
      provided by You to the Grabakey API.
    </p>
  </div>
  <div id="terms">
    <h2>Terms of Use</h2>
    <p>
      Please read these Terms carefully before using this website. By using this
      website (the "Website"), the user ("You") has accepted these Terms of Use.
      If You do not accept these Terms of Use, do not use the Website. By using
      this Website, you represent that you are of legal age to form a binding
      contract with Grabakey.
    </p>
    <p>
      The purpose of Grabakey is to build tools that bring convenience to the
      management of your public keys to foster the use of security best
      practices around the world.
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
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
  }
</style>
